import React from "react";
import errorImg from "@/assets/img/pages/errorImg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Error404 = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-100">

      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-indigo-300/40 to-sky-200/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 top-10 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-300/35 to-emerald-200/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-300/25 to-lime-200/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-12">
        <section className="relative mx-auto my-12 flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src={errorImg.src}
            alt="404 illustration"
            className="mb-8 w-auto max-w-[520px] select-none"
            draggable={false}
          />

          <h1 className="mb-4 text-4xl font-medium tracking-wide text-slate-700 md:text-5xl">
            404 - Page Not Found!
          </h1>

          {/* <p className="mb-10 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
          paraphonic unassessable foramination Caulopteris worr al Spirophyton
          encrimson esparcet aggregate chondrule restate whistler shallopy
          biosystematy area bertram plotting unstarting quarterstaff.
        </p> */}

          <Button
            asChild
            className="h-11 mt-8 min-w-[170px] rounded-md bg-gradient-to-r from-lime-400 to-green-500 px-8 text-white shadow-md"
          >
            <Link href="/">Go Back Home</Link>
          </Button>
        </section>
      </div>
    </main>
  );
};

export default Error404;
