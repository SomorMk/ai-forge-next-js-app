import React from 'react'
import Container from '../SubComponents/Container'
import Flex from '../SubComponents/Flex'

export default function Service1() {
    return (
        <section className='pt-10 pb-20'>
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
            </Container>
        </section>
    )
}
