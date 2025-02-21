"use client";

import { AgeGroup } from '@/components/AgeGroup';
import { StoryType } from '@/components/StoryType';
import { ImageStyle } from '@/components/ImageStyle';
import { StorySubjectInput } from '@/components/StorySubjectInput'

import type { fieldData } from '@/types/inputsTypes';


const CreateStory = () => {
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data)
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
    </div>
  )
}

export default CreateStory