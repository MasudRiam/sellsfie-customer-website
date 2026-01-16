import { GalleryVerticalEnd } from "lucide-react"

import { SignupForm } from "@/components/signup-form"
import Link from "next/link";
import miniLogo from "@/assets/logo/sellsfiemini.png";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div
      className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium no-underline text-black">
          <div
            className="bg-gray-100 text-primary-foreground flex size-6 items-center justify-center rounded-md">
            {/* <GalleryVerticalEnd className="size-4" /> */}
            <Image src={miniLogo} alt="sellsfie logo" className="size-6"/>
          </div>
          Sellsfie
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}
