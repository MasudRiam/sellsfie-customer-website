import React from 'react'
import Image from "next/image";
import bodymainImage from "@/assets/img/coconut.jpg";
import { AccordionReturn } from './Accordion';
const page = () => {
  return (
    <div className='pb-20'>
      <div className="relative w-full">
        {/* Image */}
        <Image
          src={bodymainImage}
          alt="Main Body"
          className="w-full h-auto"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-base font-semibold mb-4">
              brand. Select imagery and text that relates to your style and story.
            </p>
            <button className="px-6 py-3 bg-green-500 cursor-pointer text-white rounded-lg hover:bg-green-600 transition">
              Shop Now
            </button>
          </div>
        </div> */}
      </div>

      <div className='max-w-3xl mx-auto'>
        <AccordionReturn />
      </div>
    </div>
  )
}

export default page