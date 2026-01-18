import Image from 'next/image'
import React from 'react'
import bodymainImage from "@/assets/img/coconut.jpg";
const page = () => {
  return (
    <div className='pb-20'>
      
        <div className="w-full h-auto">
              <Image src={bodymainImage} alt="Main Body" className="w-full h-auto" />
         </div>

      <div>
        <h1 className="text-2xl text-center font-bold mt-8">রিফান্ড পলিসি</h1>
      </div>
      <div className='max-w-5xl mx-auto p-6'>
         <ul className="list-disc pl-5 flex flex-col gap-3">
            <li className="text-base font-bold">
              আপনার রিফান্ড প্রসেসিংয়ের সময় নির্ভর করে রিফান্ডের ধরন এবং আপনি যে পেমেন্ট পদ্ধতি ব্যবহার করেছেন তার উপর।
            </li>
            <li className="text-base font-bold">
              ঘরেরবাজার যখন আপনার রিফান্ডের ধরন অনুযায়ী আপনার রিফান্ড প্রক্রিয়া করে তখন থেকে রিফান্ডের সময়/প্রক্রিয়া শুরু হয়।
            </li>
            <li className="text-base font-bold">
              সাধারণত, ক্রেডিট কার্ড বা ডেবিট কার্ডের মাধ্যমে করা রিফান্ডগুলি প্রক্রিয়াকরণের জন্য ৫-৭ ব্যবসায়িক দিন সময় নেয়।
            </li>
            <li className="text-base font-bold">
              রিটার্ন থেকে রিফান্ড-আপনার আইটেমটি গুদামে ফেরত দেওয়া এবং কিউসি সম্পন্ন হওয়ার পরে রিফান্ড প্রক্রিয়া করা হয়
            </li>
            <li className="text-base font-bold">
              কীভাবে কোনও জিনিস ফেরত দিতে হয় তা জানতে, আমাদের রিটার্ন পলিসি পড়ুন।
            </li>
          </ul>
      </div>
    </div>
  )
}

export default page