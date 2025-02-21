

import { useState } from 'react'
import Image from 'next/image'

import { imageOptionList } from '@/constants/optionList'

import type { fieldData, OptionField } from '@/types/inputsTypes'

interface ImageStyleProps {
  userSelection: (data: fieldData) => void
}

const ImageStyle = ({ userSelection }: ImageStyleProps) => {
  const [selectedOption, setSelectedOption] = useState<string>()

  const onUserSelection = (item: OptionField) => {
    setSelectedOption(item.label)
    userSelection({
      fieldValue: item.label,
      fieldName: 'imageStyle'
    })
  }

  return (
    <div>
      <label className='font-bold text-4xl text-primary' htmlFor=''>4º Estilo da Imagem</label>
      <div className='grid grid-cols-3 gap-5 mt-3'>
        {imageOptionList.map((item) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <div
            key={item.label}
            className={
              `relative grayscale hover:grayscale-0 cursor-pointer
                ${selectedOption === item.label ? 'grayscale-0 scale-105' : 'grayscale'}`
            }
            onClick={() => onUserSelection(item)}
          >
            <h2 className='absolute bottom-5 text-2xl text-white text-center w-full'>{item.label}</h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className='object-cover h-[120px] rounded-3xl'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { ImageStyle }