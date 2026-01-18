import React from 'react'
import Image from "next/image";
import bodymainImage from "@/assets/img/coconut.jpg";
import aboutImage from "@/assets/img/product/fruits.png";
import logo from "@/assets/logo/sellsfiemini.png";
import abcd from "@/assets/img/teamMember/abcd.webp";
import abcd1 from "@/assets/img/teamMember/abcd1.png";
import abcd2 from "@/assets/img/teamMember/abcd2.jpg";
import abcd3 from "@/assets/img/teamMember/abcd3.jpg";
import abcd4 from "@/assets/img/teamMember/abcd4.jpg";
const committee = [
  { id: 1, image: abcd, name: "committee1" },
  { id: 2, image: abcd1, name: "committee2" },
  { id: 3, image: abcd4, name: "committee3" },
]

const executive = [
  { id: 1, image: abcd1, name: "Executive One" },
  { id: 2, image: abcd2, name: "Executive Two" },
  { id: 3, image: abcd3, name: "Executive Three" },
  { id: 4, image: abcd4, name: "Executive Four" },
]

const page = () => {
  return (
    <div className='mb-10'>
      {/* banner and about section */}
      <div>
        <div className="w-full h-auto">
              <Image src={bodymainImage} alt="Main Body" className="w-full h-auto" />
         </div>
      <div className='max-w-7xl mx-auto mt-14'>
        <div className='flex justify-center max-lg:flex-wrap items-center gap-6 p-6'>
          {/* image section */}
          <div className='lg:w-1/2 w-full items-center'>
          <div className='border-2 border-green-500 p-32 max-md:p-24 relative'>
            <Image
              src={aboutImage}
              alt="About Image"
              className="w-full h-auto"
            />
            <div>
              <div className='absolute top-4 left-4 px-2 py-1'>
               <Image src={logo} alt="logo" className='w-10 h-10 mb-2'/>
                </div>
            </div>
            </div>
          </div>
          <div className='lg:w-1/2 w-full'>
            <h2 className='m-0 text-5xl max-sm:text-4xl font-medium'>ঘরের বাজার সম্পর্কে</h2>
            <h6 className='m-0 text-lg text-gray-200 font-medium pb-3'>Grown in Nature, Served by Nature</h6>
            <p className='m-0 text-gray-500 text-justify'>
              ‘‘ঘরের বাজার’’ দেশের অন্যতম বিশ্বস্ত প্রতিষ্ঠান! প্রত্যন্ত অঞ্চল থেকে নিরাপাদ খাদ্য সংগ্রহ করে,পুষ্টিগুন বজায় রেখে ক্রেতার হাতে পৌছে দেয়াই আমাদের মূল উদ্দেশ্য। পুষ্টিকর ও উচ্চমানের পণ্য সরবারহের প্রতিশ্রুতি বজায় রেখে এর মধ্যেই গ্রাহকের আস্থা অর্জন করেছে, দেশে নিরাপদ খাদ্যে সরবারহকারী অন্যতম বিশ্বস্ত এই প্রতিষ্ঠান। বিশুদ্ধ এবং নিরাপদ খাদ্য সরবারহ এবং গ্রাহক সেবা নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ। প্রত্যন্ত অঞ্চল থেকে নিরাপাদ খাদ্য সংগ্রহ করে,পুষ্টিগুন বজায় রেখে ক্রেতার হাতে পৌছে দেয়াই আমাদের প্রধান লক্ষ্য।
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Committee section */}
      <div className='max-w-7xl mx-auto p-6'>
        <div>
          <h2 className='text-5xl font-medium text-center max-sm:text-4xl mb-8'>Advisory Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {/* Committee member */}
          {committee.map((member) => (
            <div key={member.id} className="bg-white">
            <div className="aspect-square overflow-hidden group"> 
              <Image
                src={member.image}
                alt="Committee Member"
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
              <h3 className="text-xl m-0 font-semibold">Committee Member 1</h3>
              <p className="text-gray-500">Position: Chairman</p>
            </div>
          ))}
          </div>
        </div>
        <div>
          <h2 className='text-5xl font-medium text-center max-sm:text-4xl mt-8 mb-12'>Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            
            {/* Executive member */}
            {executive.map((member) => (
              <div key={member.id} className="bg-white">
                <div className="aspect-square overflow-hidden group">
                  <Image
                    src={member.image}
                    alt="Executive Member 1"
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mb-0 font-semibold">Executive Member 1</h3>
              <p className="text-gray-500">Position: President</p>
            </div>
            ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default page