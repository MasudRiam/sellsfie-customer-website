"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  remember: z.boolean().optional(),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">
            We would love to hear from you.
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Name" {...register("name")} className="focus-visible:border-green-700 focus-visible:ring-white"/>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                  className="focus-visible:border-green-700 focus-visible:ring-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Textarea
                placeholder="Message"
                className="h-48 focus-visible:border-green-700 focus-visible:ring-white"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="remember"
                    checked={!!field.value}
                    onCheckedChange={(val) => field.onChange(val === true)}
                    className="cursor-pointer data-[state=checked]:bg-green-700 data-[state=checked]:border-green-700"
                  />
                )}
              />
              <label
                htmlFor="remember"
                className="text-sm text-muted-foreground"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-600 px-8 cursor-pointer"
            >
              Submit Now
            </Button>
          </form>
        </div>

        <div className="space-y-6 lg:pt-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-sm text-muted-foreground">
              23/25 Pallabi Rd, Dhaka 1216, Bangladesh
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Information</h3>
            <p className="text-sm text-muted-foreground leading-6">
              কল করুন: +880 177 5280 411
              <br />
              প্রবাস থেকে পরিবারের কাছে উপহার পাঠাতে যোগাযোগ করুন
              <br />
              (WhatsApp) +880 177 5280 411
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
