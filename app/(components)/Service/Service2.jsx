import React from 'react'
import Container from '../SubComponents/Container'
import Flex from '../SubComponents/Flex'
import SectionHeading from '../SubComponents/SubComponents'
import Image from 'next/image'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from 'next/link'

export default function Service2() {
    return (
        <section className='py-10 relative z-[1]'>
            <Container>
                <Flex className={'justify-center'}>
                    <div className='text-center'>
                        <div className='border border-white/40 bg-[#1A1A1A] inline-block py-1.5 px-2 rounded-full mb-10'>
                            <div className='bg-[#313131] py-[4px] px-3 rounded-full text-white text-sm font-bold'>Our Core Commitments</div>
                        </div>
                        <SectionHeading title={'Turn Ambition Into Impact'} />
                        <p className='text-white/70 text-lg leading-[160%] max-w-[60%] mx-auto mt-5'>Our 12 week elite incubator program is a hybrid of 5 weeks in-person and 7 weeks virtual and is designed to be intense, rewarding, and life-changing. We know you have big ideas, and we're here to help you make them happen.</p>
                    </div>
                </Flex>

                <Flex className={'gap-x-10 mt-20'}>
                    <div className='w-1/3 border-2 border-white/40 p-5 rounded-xl'>
                        <div>
                            <Image src={'/funding.svg'} width={1000} height={200} alt='' className='w-full max-w-full' />
                        </div>
                        <div>
                            <h3 className='text-xl text-white font-semibold mb-5'>Connections that Count</h3>
                            <p className='text-base text-white/70 leading-[160%]'>From pitch days with top investors to networking events with industry insiders, we'll make sure you're in the right rooms with the right people.</p>
                        </div>
                    </div>
                    <div className='w-1/3 border-2 border-white/40 p-5 rounded-xl'>
                        <div>
                            <Image src={'/expert.svg'} width={1000} height={200} alt='' className='w-full max-w-full' />
                        </div>
                        <div>
                            <h3 className='text-xl text-white font-semibold mb-5'>Dynamic Curriculum</h3>
                            <p className='text-base text-white/70 leading-[160%]'>Hands-on workshops, relevant projects for your company, and challenges that will test your limits and expand your horizons.</p>
                        </div>
                    </div>
                    <div className='w-1/3 border-2 border-white/40 p-5 rounded-xl'>
                        <div>
                            <Image src={'/intensive.svg'} width={1000} height={200} alt='' className='w-full max-w-full' />
                        </div>
                        <div>
                            <h3 className='text-xl text-white font-semibold mb-5'>Milestones that Matter</h3>
                            <p className='text-base text-white/70 leading-[160%]'>We'll set goals together and celebrate every achievement, no matter how small or big.</p>
                        </div>
                    </div>
                </Flex>

                <Flex className={'mt-10 gap-x-10'}>

                    <Flex className='w-7/12 items-end border-2 border-white/40 px-8 pt-10 rounded-xl'>
                        <div className='w-1/2 pb-10'>
                            <h3 className='text-xl text-white font-semibold mb-5'>Investor Presentation Week</h3>
                            <p className='text-base text-white/70 leading-[160%]'>In week 12, present your startup to 500+ investors, from angel funds to VCs, to secure vital funding.</p>
                        </div>
                        <div className='w-1/2'>
                            <Image src={'/financial.svg'} width={1000} height={200} alt='' className='w-full max-w-full max-h-[300px]' />
                        </div>
                    </Flex>

                    <Flex className='w-5/12 flex-col gap-y-5'>
                        <Flex className={'flex-col justify-between gap-y-10 border-2 border-white/40 p-5 rounded-xl'}>
                            <div className='w-full'>
                                <Image src={'/view-week.svg'} width={500} height={200} alt='' className='w-full max-w-full' />
                            </div>
                            <Flex className='w-full justify-between items-center'>
                                <h3 className='text-xl text-white font-semibold'>View 12 Weeks Schedule</h3>
                                <Link href={'/'}>
                                    <BsArrowUpRightCircleFill className='text-white text-2xl hover:text-orange-500 duration-300' />
                                </Link>
                            </Flex>
                        </Flex>
                        <Flex className={'w-full justify-between border-2 border-white/40 p-5 rounded-xl'}>
                            <Flex className='flex-col mt-5 gap-y-2'>
                                <h6 className='text-base text-white/70 font-medium'>Supported by</h6>
                                <h3 className='text-xl text-white font-semibold'>Our Proprietary: Annalise AI</h3>
                            </Flex>
                            <div>
                                <div className='w-[60px] h-[60px] border-2 border-white/50 rounded-full p-2 hover:bg-white/20 duration-300'>
                                    <Link href={'/'}>
                                        <Image src={'/chatbot.png'} width={100} height={100} alt='' className='w-full max-w-full' />
                                    </Link>
                                </div>
                            </div>
                        </Flex>
                    </Flex>

                </Flex>

                <Flex></Flex>
            </Container>

            <div className="absolute top-0 left-0 z-[-1]">
                <div className=' absolute top-0 left-0 w-full h-full bg-black/80 z-[-1]]'></div>
                <img src="/commitments.png" alt="" />
            </div>
        </section>
    )
}
