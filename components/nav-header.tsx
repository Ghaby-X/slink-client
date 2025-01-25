import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavHeader = () => {
    return (
        <Link href={'/dashboard'}>
            <div className='cursor-pointer'>
                <div className='flex items-center relative h-12'>
                    <Image src={'/slink-icon.png'} alt='icon' className='absolute left-0' width={45} height={45} />
                    <p className='ml-12 text-xl'>slink</p>
                </div>
            </div >
        </Link>
    )
}

export default NavHeader