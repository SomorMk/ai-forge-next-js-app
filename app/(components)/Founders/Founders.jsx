"use client";

import React, { useRef, useState } from "react";
import Container from "../SubComponents/Container";
import Flex from "../SubComponents/Flex";
import SectionHeading from "../SubComponents/SubComponents";
import Image from "next/image";

export default function Founders() {
  const founderImg1Ref = useRef(null);
  const founderImg2Ref = useRef(null);
  const founderImg3Ref = useRef(null);
  const founderImg4Ref = useRef(null);

  const handleMouseOver = (index) => {
    switch (index) {
      case 1:
        founderImg1Ref.current.style.width = "50%";
        founderImg2Ref.current.style.width = "16.66%";
        founderImg3Ref.current.style.width = "16.66%";
        founderImg4Ref.current.style.width = "16.66%";
        break;
      case 2:
        founderImg1Ref.current.style.width = "16.66%";
        founderImg2Ref.current.style.width = "50%";
        founderImg3Ref.current.style.width = "16.66%";
        founderImg4Ref.current.style.width = "16.66%";
        break;
      case 3:
        founderImg1Ref.current.style.width = "16.66%";
        founderImg2Ref.current.style.width = "16.66%";
        founderImg3Ref.current.style.width = "50%";
        founderImg4Ref.current.style.width = "16.66%";
        break;
      case 4:
        founderImg1Ref.current.style.width = "16.66%";
        founderImg2Ref.current.style.width = "16.66%";
        founderImg3Ref.current.style.width = "16.66%";
        founderImg4Ref.current.style.width = "50%";
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-10 mb-20">
      <Container>
        <Flex className={"items-end"}>
          <div className="w-1/2">
            <div className="border border-white/40 bg-[#1A1A1A] inline-block py-1.5 px-2 rounded-full mb-10">
              <div className="bg-[#313131] py-[4px] px-3 rounded-full text-white text-sm font-bold">
                Alumni Speak
              </div>
            </div>
            <SectionHeading title={"Hear from our current Founders"} />
          </div>
          <div className="w-1/2">
            <p className="text-white/70 text-lg leading-[160%] mt-5">
              Insights and reflections from the trailblazers who shaped their
              futures with AI Forge
            </p>
          </div>
        </Flex>

        <Flex className={"gap-x-5 mt-20"}>
          <div
            ref={founderImg1Ref}
            className="w-[50%] h-[400px] duration-700"
          >
            <Image
              onMouseOver={() => handleMouseOver(1)}
              src={"/founder1.png"}
              width={500}
              height={500}
              alt=""
              className="w-full h-full max-w-full object-cover rounded-2xl"
            />
          </div>
          <div ref={founderImg2Ref} className="w-[16.66%] h-[400px] duration-700">
            <Image
              onMouseOver={() => handleMouseOver(2)}
              src={"/founder2.png"}
              width={500}
              height={500}
              alt=""
              className="w-full h-full max-w-full object-cover rounded-2xl"
            />
          </div>
          <div
            ref={founderImg3Ref}
            className="w-[16.66%] h-[400px] duration-700"
          >
            <Image
              onMouseOver={() => handleMouseOver(3)}
              src={"/founder3.png"}
              width={500}
              height={500}
              alt=""
              className="w-full h-full max-w-full object-cover rounded-2xl"
            />
          </div>
          <div
            ref={founderImg4Ref}
            className="w-[16.66%] h-[400px] duration-700"
          >
            <Image
              onMouseOver={() => handleMouseOver(4)}
              src={"/founder4.png"}
              width={500}
              height={500}
              alt=""
              className="w-full h-full max-w-full object-cover rounded-2xl"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
}
