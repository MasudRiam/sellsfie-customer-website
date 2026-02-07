import { GalleryVerticalEnd } from "lucide-react";

import { SignupForm } from "@/components/signup-form";
import Link from "next/link";
import miniLogo from "@/assets/logo/sellsfiemini.png";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="relative isolate flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden p-6 md:p-10">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-100" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-indigo-300/40 to-sky-200/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-36 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-300/35 to-emerald-200/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-[-180px] left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-300/25 to-lime-200/10 blur-3xl"
      />
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium no-underline text-black"
        >
          <div className="bg-gray-100 text-primary-foreground flex size-6 items-center justify-center rounded-md">
            {/* <GalleryVerticalEnd className="size-4" /> */}
            <Image src={miniLogo} alt="sellsfie logo" className="size-6" />
          </div>
          Sellsfie
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}
