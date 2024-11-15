import React from 'react'
import Container from '../SubComponents/Container';
import Flex from '../SubComponents/Flex'
import Link from 'next/link'
import Image from 'next/image';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Banner() {
    return (
        <section className='py-20'>
            <Container>
                <Flex className={'gap-x-5'}>

                    <div className='w-9/12'>
                        <div className='border border-white/40 bg-[#1A1A1A] inline-block py-2 pl-3 pr-5 rounded-full mb-3'>
                            <Flex>
                                <span className='bg-[#313131] py-[3px] px-3 rounded-lg text-white text-xs font-bold'>Start Your Journey!</span>
                                <span className='ml-5 text-white text-xs font-bold flex gap-x-2 items-center'>About the Hybrid Program <FaArrowRight className='text-white' /></span>
                            </Flex>
                        </div>
                        <h1 className='text-white text-[58px] font-semibold leading-[150%]'>Forging <span className='text-[64px] text-orange-500 italic animate-pulse'>Ai</span> Leaders Through <br /> Challenges and Elite Connections</h1>
                    </div>

                    <div className='w-3/12'>
                        <h3 className='text-white text-xl font-medium'>Where Ambition Meets Opportunity to Shape the Future of AI</h3>
                        <Link href={'/'} className='py-3 px-5 bg-white rounded-xl text-black font-medium inline-block gap-x-2 mt-10 align-middle group hover:bg-orange-500 hover:text-white duration-500'>Apply Now <FaArrowTrendUp className='float-right ml-2 align-middle text-xl group-hover:animate-pulse' /></Link>
                    </div>

                </Flex>

                <Flex className={'mt-20 gap-x-5'}>

                    <div className='w-8/12'>
                        <Image src={'/mainBg.png'} alt='Main Bg' width={1000} height={300} className='w-full max-w-full rounded-2xl' />

                        <Flex className='mt-5 gap-x-5'>
                            <div className='w-8/12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl relative'>

                                <Image src={'/BACKGROUNDLINES.png'} alt='' width={500} height={500} className='w-full h-full max-w-full rounded-2xl' />

                                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-y-8 px-8'>
                                    <Flex className={'justify-between items-center'}>
                                        <h3 className='text-5xl text-white font-bold'>45</h3>
                                        <Link href={'/'} className='w-[50px] h-[50px] bg-white/30 rounded-full flex justify-center items-center border border-white hover:rotate-[-90deg] duration-500'><FaArrowRight className='text-white text-2xl' /></Link>
                                    </Flex>
                                    <Flex className={'justify-between items-center'}>
                                        <div>
                                            <h6 className='text-xl text-white'>Startups Created</h6>
                                        </div>
                                        <ul className='flex gap-x-3'>
                                            <li className='w-[45px] h-[45px] bg-white rounded-lg flex justify-center items-center group'><Image src={'/s-1.png'} alt='' width={50} height={50} className='w-full max-w-[70%] group-hover:scale-75 group-hover:rotate-12 duration-300' /></li>
                                            <li className='w-[45px] h-[45px] bg-white rounded-lg flex justify-center items-center group'><Image src={'/s-2.png'} alt='' width={50} height={50} className='w-full max-w-[70%] group-hover:scale-75 group-hover:rotate-12 duration-300' /></li>
                                            <li className='w-[45px] h-[45px] bg-white rounded-lg flex justify-center items-center group'><Image src={'/s-3.png'} alt='' width={50} height={50} className='w-full max-w-[70%] group-hover:scale-75 group-hover:rotate-12 duration-300' /></li>
                                            <li className='w-[45px] h-[45px] bg-white rounded-lg flex justify-center items-center group'><Image src={'/s-4.png'} alt='' width={50} height={50} className='w-full max-w-[70%] group-hover:scale-75 group-hover:rotate-12 duration-300' /></li>

                                            <Link href={'/'} className='w-[45px] h-[45px] bg-white rounded-lg flex justify-center items-center group'><FaPlus className='text-blue-500 text-xl group-hover:rotate-90 duration-500' /></Link>
                                        </ul>
                                    </Flex>
                                </div>

                            </div>

                            <div className='w-4/12 relative'>
                                <Image src={'/intensive-3.png'} alt='' width={500} height={500} className='w-full max-w-full rounded-2xl' />
                                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-y-5 p-8 bg-black/30'>
                                    <h5 className='text-5xl text-white font-semibold'>12 Weeks</h5>
                                    <p className='text-lg text-white'>Intensive Program</p>
                                </div>
                            </div>
                        </Flex>
                    </div>

                    <div className='w-4/12 relative'>
                        <Image src={'/class2.png'} alt='Class Image' width={500} height={1000} className='h-full object-cover rounded-2xl' />

                        <div className='absolute top-0 left-0 w-full h-full flex items-end justify-end p-10'>
                            <Link href={'/'} className='py-3 px-5 bg-white rounded-xl text-black font-medium inline-block gap-x-2 mt-10 align-middle group hover:bg-orange-500 hover:text-white duration-500'>Find Out More <FaArrowTrendUp className='float-right ml-2 align-middle text-xl group-hover:animate-pulse' /></Link>
                        </div>
                    </div>

                </Flex>

            </Container>
        </section>
    )
}