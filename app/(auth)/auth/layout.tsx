import { ReactNode } from 'react'
import Image from 'next/image'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex h-screen w-full'>
            <div className='flex-1 hidden md:block bg-blue-400'>
                <div className='text-xl flex items-center ml-4 mt-4'>
                    <Image src={'/slink-icon.png'} alt='icon' width={40} height={40} />
                    <span className='font-semibold'>Slink</span>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center relative'>
                <div className='text-xl items-center absolute top-3 left-3 flex md:hidden'>
                    <Image src={'/slink-icon.png'} alt='icon' width={40} height={40} />
                    <span className='font-semibold'>Slink</span>
                </div>
                {children}
            </div>
        </div>
    )
}

export default layout