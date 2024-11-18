import React from 'react'
import Container from '../SubComponents/Container'
import Flex from '../SubComponents/Flex'
import SectionHeading from '../SubComponents/SubComponents'
import Image from 'next/image'

export default function Founders() {
    return (
        <section className='py-10 mb-20'>
            <Container>
                <Flex className={'items-end'}>
                    <div className='w-1/2'>
                        <div className='border border-white/40 bg-[#1A1A1A] inline-block py-1.5 px-2 rounded-full mb-10'>
                            <div className='bg-[#313131] py-[4px] px-3 rounded-full text-white text-sm font-bold'>Alumni Speak</div>
                        </div>
                        <SectionHeading title={'Hear from our current Founders'} />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-white/70 text-lg leading-[160%] mt-5'>Insights and reflections from the trailblazers who shaped their futures with AI Forge</p>
                    </div>
                </Flex>

                <Flex className={'gap-x-5 mt-20'}>
                    <div className='w-5/12'>
                        <Image src={'/founder1.png'} width={500} height={500} alt='' className='w-full max-w-full rounded-2xl' /></div>
                    <div className='w-7/12'>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}