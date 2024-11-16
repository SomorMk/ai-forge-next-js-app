'use client'
import React, { useState } from 'react'
import Container from '../SubComponents/Container'
import Flex from '../SubComponents/Flex'
import SectionHeading from '../SubComponents/SubComponents'
import Link from 'next/link'
import { FaArrowTrendUp } from 'react-icons/fa6'
import Image from 'next/image'

export default function Alumni() {
    let [active, setActive] = useState(1)

    return (
        <section className='py-10 mb-20'>
            <Container>
                <Flex className={'justify-between items-end'}>
                    <div>
                        <div className='border border-white/40 bg-[#1A1A1A] inline-block py-1.5 px-2 rounded-full mb-10'>
                            <div className='bg-[#313131] py-[4px] px-3 rounded-full text-white text-sm font-bold'>Join the movement</div>
                        </div>
                        <SectionHeading title={'Our Alumni'} />
                        <p className='text-white text-lg leading-[160%] mt-5'>We welcome applicants from the following backgrounds :</p>
                    </div>

                    <div>
                        <Link href={'/'} className='py-3 px-6 rounded-lg bg-white/20 font-medium inline-block gap-x-2 mt-10 align-middle border border-white text-white hover:bg-white hover:text-black duration-500'>Apply Now <FaArrowTrendUp className='float-right ml-2 align-middle text-xl group-hover:animate-pulse' /></Link>
                    </div>
                </Flex>

                <Flex className={'mt-20'}>
                    <div className='w-1/5'>
                        <div onClick={() => setActive(1)} href={'/'} className={`py-4 px-8 text-white text-xl font-semibold cursor-pointer relative after:absolute after:top-0 after:right-[-10px] after:w-[10px] after:h-full ${active == 1 ? 'bg-white/10 after:bg-white' : 'after:bg-transparent'}`}>VoxMind</div>
                        <div onClick={() => setActive(2)} href={'/'} className={`py-4 px-8 text-white text-xl font-semibold cursor-pointer relative after:absolute after:top-0 after:right-[-10px] after:w-[10px] after:h-full ${active == 2 ? 'bg-white/10 after:bg-white' : 'after:bg-transparent'}`}>Donaa</div>
                        <div onClick={() => setActive(3)} href={'/'} className={`py-4 px-8 text-white text-xl font-semibold cursor-pointer relative after:absolute after:top-0 after:right-[-10px] after:w-[10px] after:h-full ${active == 3 ? 'bg-white/10 after:bg-white' : 'after:bg-transparent'}`}>Route</div>
                    </div>

                    <div className='w-4/5'>
                        {active == 1 &&
                            <div>
                                <Image src={'/voxmind.png'} alt='VoxMind Image' width={1000} height={1000} className='w-full max-w-full rounded-2xl border' />
                            </div>
                        }
                        {active == 2 &&
                            <div>
                                <Image src={'/donaa.png'} alt='Donaa Image' width={1000} height={1000} className='w-full max-w-full rounded-2xl border' />
                            </div>
                        }
                        {active == 3 &&
                            <div>
                                <Image src={'/route.png'} alt='Route Image' width={1000} height={1000} className='w-full max-w-full rounded-2xl border' />
                            </div>
                        }
                    </div>
                </Flex>
            </Container>
        </section>
    )
}