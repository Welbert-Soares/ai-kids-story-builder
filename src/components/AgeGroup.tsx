

import { useState } from 'react'
import Image from 'next/image'

import { ageOptionList } from '@/constants/optionList'

import type { fieldData, OptionField } from '@/types/inputsTypes'

interface AgeGroupProps {
  userSelection: (data: fieldData) => void
}

const AgeGroup = ({ userSelection }: AgeGroupProps) => {
  const [selectedOption, setSelectedOption] = useState<string>()

  const onUserSelection = (item: OptionField) => {
    setSelectedOption(item.label)
    userSelection({
      fieldValue: item.label,
      fieldName: 'ageGroup'
    })
  }

  return (
    <div>
      <label className='font-bold text-4xl text-primary' htmlFor=''>3º Idade da Criança</label>
      <div className='grid grid-cols-3 gap-5 mt-3'>
        {ageOptionList.map((item) => (
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
              className='object-cover h-[260px] rounded-3xl'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { AgeGroup }