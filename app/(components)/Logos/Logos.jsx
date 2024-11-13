import React from 'react'
import Container from '../SubComponents/Container'
import SectionHeading from '../SubComponents/SubComponents'
import Flex from '../SubComponents/Flex'
import Image from 'next/image'

export default function Logos() {
  return (
    <section className='pt-10 pb-20'>
        <Container>
            <Flex className={'justify-center'}>
                <SectionHeading title={'More Than $100,000 Startup Credits'} />
            </Flex>

            <Flex className={'w-[90%] mx-auto justify-between mt-20'}>
                <Flex className='w-1/12 items-center justify-center'>
                    <Image src={'/google.png'} width={200} height={50} alt='' className='w-full max-w-full object-center' />
                </Flex>
                <Flex className='w-1/12 items-center justify-center'>
                    <Image src={'/aws.png'} width={200} height={50} alt='' className='w-full max-w-[65%] object-center' />
                </Flex>
                <Flex className='w-2/12 items-center justify-center'>
                    <Image src={'/mongodb.png'} width={200} height={50} alt='' className='w-full max-w-[70%] object-center' />
                </Flex>
                <Flex className='w-1/12 items-center justify-center'>
                    <Image src={'/slack.png'} width={200} height={50} alt='' className='w-full max-w-[50%] object-center' />
                </Flex>
                <Flex className='w-1/12 items-center justify-center'>
                    <Image src={'/clickup.svg'} width={200} height={50} alt='' className='w-full max-w-full object-center' />
                </Flex>
                <Flex className='w-1/12 items-center justify-center'>
                    <Image src={'/notion.png'} width={200} height={50} alt='' className='w-full max-w-[60%] object-center' />
                </Flex>
            </Flex>

        </Container>
    </section>
  )
}