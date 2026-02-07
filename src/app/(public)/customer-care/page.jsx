import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import bodymainImage from "@/assets/img/coconut.jpg";
const page = () => {
  return (
    <div className="pb-20">
        <div className="w-full h-auto">
           <Image src={bodymainImage} alt="Main Body" className="w-full h-auto" />
       </div>
    <section className="max-w-4xl mx-auto px-4 mt-10">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-14">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="text-left text-lg font-medium">
            অর্ডার পেতে আমার কতক্ষণ সময় লাগবে?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            সাধারণত আমরা অর্ডার বাতিলের ৩ থেকে ৫ দিনের মধ্যে পণ্য সরবরাহ করি
            এবং কখনো কোনো অনাকাঙ্ক্ষিত পরিস্থিতি তৈরি হলে আমরা ফোনে গ্রাহকের
            সাথে যোগাযোগ করে ডেলিভারি এর সময় সম্পর্কে অবগত করি।
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="text-left text-lg font-medium">
            ডেলিভারি চার্জ
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            ঢাকার ভিতরে ও ঢাকার বাইরে ডেলিভারি চার্জ ভিন্ন হতে পারে।
            অর্ডার কনফার্ম করার সময় সঠিক চার্জ জানানো হয়।
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3" className="border-b border-orange-500">
          <AccordionTrigger className="text-left text-lg font-medium">
            গ্রাহক সেবা
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            আমাদের গ্রাহক সেবা প্রতিদিন সকাল ১০টা থেকে রাত ১০টা পর্যন্ত
            সক্রিয় থাকে। যেকোনো সমস্যায় আমাদের সাথে যোগাযোগ করুন।
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
    </div>
  );
};

export default page;
