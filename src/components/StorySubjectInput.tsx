

import { Textarea } from '@heroui/input'

import type { fieldData } from '@/types/inputsTypes'

interface StorySubjectInputProps {
  userSelection: (data: fieldData) => void
}

const StorySubjectInput = ({ userSelection }: StorySubjectInputProps) => {
  return (
    <div>
      <label className='font-bold text-4xl text-primary' htmlFor='storySubject'>1° Tema da História</label>
      <Textarea
        placeholder='Escreva o tema da sua história'
        size='lg'
        classNames={{
          input: "resize-y min-h-[230px] p-5"
        }}
        className='mt-3 max-w-lg'
        onChange={(e) => userSelection({
          fieldValue: e.target.value,
          fieldName: 'storySubject'
        })}
        id='storySubject'
      />
    </div>
  )
}

export { StorySubjectInput }