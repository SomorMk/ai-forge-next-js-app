import React from 'react'
import Container from '../SubComponents/Container'
import Flex from '../SubComponents/Flex'
import Image from 'next/image'

export default function Service1() {
    return (
        <section className='py-10'>
            <Container>
                <Flex>
                    <div className='w-1/2'>
                        <div className='border border-white/40 bg-[#1A1A1A] inline-block py-1.5 px-2 rounded-full'>
                            <div className='bg-[#313131] py-[4px] px-3 rounded-full text-white text-sm font-bold'>What We Do</div>
                        </div>
                        <h2 className='text-white text-4xl font-medium mt-10'>Uncompromising Excellence</h2>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-white/70 text-xl leading-[160%]'>We start with the belief in your personal potential as we’re Founder-First. We then test that through a challenging, yet supportive environment that pushes you to go beyond what's comfortable and achieve truly outstanding results. We're here to help you unlock your highest ambitions because we know that greatness comes from pushing boundaries.</p>
                    </div>
                </Flex>

                <Flex className={'gap-x-10 items-end mt-14'}>
                    <Flex className='w-1/2 flex-col gap-y-10'>
                        <div>
                            <Image src={'/service1.png'} width={1000} height={200} alt='' className='w-full max-w-full rounded-2xl border-2 border-white/40' />
                        </div>
                        <div>
                            <Image src={'/service2.png'} width={1000} height={200} alt='' className='w-full max-w-full rounded-2xl border-2 border-white/40' />
                        </div>
                    </Flex>
                    <Flex className='w-1/2 flex-col justify-between gap-y-10'>
                        <Flex className={'justify-center mb-8'}>
                            <div className='border border-white/40 bg-[#1A1A1A] inline-block py-1.5 px-2 rounded-full'>
                                <div className='bg-[#313131] py-[4px] px-3 rounded-full text-white text-sm font-bold'>Founder Strength</div>
                            </div>
                        </Flex>
                        <Flex className='w-full flex-col gap-y-8 border-2 border-white/40 rounded-2xl p-10'>
                            <h2 className='text-white text-4xl font-medium'>Forging Resilient Leaders</h2>
                            <p className='text-white/70 text-lg leading-[160%]'>We start with the belief in your personal potential as we’re Founder-First. We then test that through a challenging, yet supportive environment that pushes you to go beyond what's comfortable and achieve truly outstanding results. We're here to help you unlock your highest ambitions because we know that greatness comes from pushing boundaries.</p>
                        </Flex>
                        <div className='w-full h-full'>
                            <Image src={'/service3.png'} width={1000} height={600} alt='' className='w-full max-w-full rounded-2xl border-2 border-white/40' />
                        </div>
                    </Flex>
                </Flex>
            </Container>
        </section>
    )
}
