import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionReturn() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className=" text-lg font-medium cursor-pointer border-b">রিটার্ন পলিসি</AccordionTrigger>

        <AccordionContent className="text-balance">
          <ul className="list-disc pl-5 flex flex-col gap-3">
            <li className="text-gray-600 leading-relaxed">
              ডেলিভারির সময় পণ্য যদি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, তাহলে রিটার্ন বা রিফান্ডের জন্য আমাদের কাস্টমার সার্ভিসের সাথে যোগাযোগ করুন।
            </li>
            <li className="text-gray-600 leading-relaxed">
              পন্য গ্রহনের ৭ দিনের মধ্যেই পন্য রিটার্ন করে ব্যাংক পেমেন্ট, বিকাশ অথবা ভাউচার এর মাধ্যমে বুঝে নিন রিফান্ড। রির্টান পলিসি সম্পর্কে আরও তথ্যের জন্য, দয়া করে আমাদের পন্য ফেরত নীতিমালা দেখুন।
            </li>
            <li className="text-gray-600 leading-relaxed">
              পন্য গ্রহনের ৭ দিনের মধ্যেই পন্য রিটার্ন করে ব্যাংক পেমেন্ট, বিকাশ অথবা ভাউচার এর মাধ্যমে বুঝে নিন রিফান্ড। রির্টান পলিসি সম্পর্কে আরও তথ্যের জন্য, দয়া করে আমাদের পন্য ফেরত নীতিমালা দেখুন।
            </li>
            <li className="text-gray-600 leading-relaxed">
              পন্য গ্রহনের ৭ দিনের মধ্যেই পন্য রিটার্ন করে ব্যাংক পেমেন্ট, বিকাশ অথবা ভাউচার এর মাধ্যমে বুঝে নিন রিফান্ড। রির্টান পলিসি সম্পর্কে আরও তথ্যের জন্য, দয়া করে আমাদের পন্য ফেরত নীতিমালা দেখুন।
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
