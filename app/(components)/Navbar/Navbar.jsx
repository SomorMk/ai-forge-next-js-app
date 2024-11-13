import React from 'react'
import Container from '../SubComponents/container'
import Flex from '../SubComponents/Flex'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='py-10 border-b border-white/20'>
      <Container>
        <Flex className={'justify-between items-center'}>

          <div>
            <Link href={'/'}><Image src={'/logo_white.svg'} alt='Logo' width={120} height={80} /></Link>
          </div>

          <div>
            <ul className='flex gap-x-10'>
              <li><Link href={'/'} className='text-white font-base font-semibold hover:mx-2 duration-700'>About</Link></li>
              <li><Link href={'/'} className='text-white font-base font-semibold hover:mx-2 duration-700'>Team</Link></li>
              <li><Link href={'/'} className='text-white font-base font-semibold hover:mx-2 duration-700'>Mentors</Link></li>
              <li><Link href={'/'} className='text-white font-base font-semibold hover:mx-2 duration-700'>Partner</Link></li>
              <li><Link href={'/'} className='text-white font-base font-semibold hover:mx-2 duration-700'>Portfolio</Link></li>
              <li><Link href={'/'} className='text-white font-base font-semibold hover:mx-2 duration-700'>Event</Link></li>
              <li><Link href={'/'} className='text-white font-base font-semibold hover:mx-2 duration-700'>Apply</Link></li>
            </ul>
          </div>

          <div>
            <ul className='flex gap-x-10'>
              <li><Link href={'/'} className='text-white font-base font-semibold'>Login</Link></li>
              <li><Link href={'/'} className='text-black font-base font-semibold py-3 px-5 bg-white rounded-xl border border-transparent hover:border-white hover:bg-black hover:text-white duration-300'>Signup</Link></li>
            </ul>
          </div>

        </Flex>
      </Container>
    </nav>
  )
}
