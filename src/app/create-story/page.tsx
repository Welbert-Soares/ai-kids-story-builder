"use client";

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@heroui/button';

import { AgeGroup } from '@/components/AgeGroup';
import { StoryType } from '@/components/StoryType';
import { ImageStyle } from '@/components/ImageStyle';
import { CustomLoader } from '@/components/CustomLoader';
import { StorySubjectInput } from '@/components/StorySubjectInput'

import type { fieldData } from '@/types/inputsTypes';
import type { storyFormDataType } from '@/types/formDataTypes';

import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { chatSession } from '@/config/gemini-ai';


const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT

const CreateStory = () => {
  const [formData, setFormData] = useState<storyFormDataType>();
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * used to add data form
   * @param data 
   */
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev) => ({
      ...prev,
      [data.fieldName]: data.fieldValue
    } as storyFormDataType))
    console.log(formData)
  }

  const generateStory = async () => {
    setLoading(true)

    const FINAL_PROMPT = CREATE_STORY_PROMPT
      ?.replace('{ageGroup}', formData?.ageGroup ?? '')
      .replace('{storyType}', formData?.storyType ?? '')
      .replace('{storySubject}', formData?.storySubject ?? '')
      .replace('{imageStyle}', formData?.imageStyle ?? '')
    //gerar história
    try {
      if (FINAL_PROMPT === undefined) {
        throw new Error('Error: FINAL_PROMPT is undefined')
      }
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result.response.text())

      const response = await saveInDatabase(result.response.text())
      console.log(response)

      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
    //salvar no banco de dados

    // gerar imagem

  }

  const saveInDatabase = async (output: string) => {
    const recordId = uuidv4();

    setLoading(true)
    try {
      const result = await db.insert(StoryData).values({
        storyId: recordId,
        ageGroup: formData?.ageGroup,
        imageStyle: formData?.imageStyle,
        storySubject: formData?.storySubject,
        storyType: formData?.storyType,
        output: JSON.parse(output)
      }).returning({ storyId: StoryData?.storyId })

      setLoading(false)
      return result;
    } catch (error) {
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[70px] text-primary text-center'>CRIE SUA HISTÓRIA</h2>
      <p className='text-2xl text-primary text-center'>Desbloqueie sua criatividade com IA: Crie histórias como nunca antes! Deixe nossa IA dar vida à sua imaginação, uma história de cada vez</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        {/* Tema */}
        <StorySubjectInput userSelection={onHandleUserSelection} />

        {/* Tipo de história */}
        <StoryType userSelection={onHandleUserSelection} />

        {/* Idade da criança */}
        <AgeGroup userSelection={onHandleUserSelection} />

        {/* Estilo da Imagem */}
        <ImageStyle userSelection={onHandleUserSelection} />

      </div>

      <div className='flex justify-center mt-10'>
        <Button
          color='primary'
          className='p-10 text-2xl'
          onPress={generateStory}
          disabled={loading}
        >
          Gerar História
        </Button>
      </div>
      <CustomLoader />
    </div>
  )
}

export default CreateStory