"use client";

import { useState } from 'react';
import { Button } from '@heroui/button';

import { AgeGroup } from '@/components/AgeGroup';
import { StoryType } from '@/components/StoryType';
import { ImageStyle } from '@/components/ImageStyle';
import { StorySubjectInput } from '@/components/StorySubjectInput'

import type { fieldData } from '@/types/inputsTypes';
import type { storyFormDataType } from '@/types/formDataTypes';


const CreateStory = () => {
  const [formData, setFormData] = useState<storyFormDataType>();

  /**
   * used to add data form
   * @param data 
   */
  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue
    }))
    console.log(formData)
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
        <Button color='primary' className='p-10 text-2xl'>Gerar História</Button>
      </div>
    </div>
  )
}

export default CreateStory