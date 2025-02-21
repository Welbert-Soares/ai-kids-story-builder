
import Image from 'next/image'
import { SignIn } from '@clerk/nextjs'
import { neobrutalism } from "@clerk/themes"


export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image src={'/login.png'} alt='login' width={700} height={1000} className='w-full' />
      </div>
      <div className='flex justify-center items-center h-screen order-first md:order-last'>
        <SignIn
          appearance={{
            baseTheme: neobrutalism,
          }}
        />
      </div>
    </div>
  )
}