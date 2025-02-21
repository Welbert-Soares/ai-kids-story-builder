import Image from "next/image"


interface LayoutAuthProps {
  children: React.ReactNode
}

const LayoutAuth = ({ children }: LayoutAuthProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image src={'/login.png'} alt='login' width={700} height={700} className='w-full h-screen rounded-r-lg rounded-br-lg' />
      </div>
      <div className='flex justify-center items-center h-screen order-first md:order-last'>
        {children}
      </div>
    </div>
  )
}

export default LayoutAuth