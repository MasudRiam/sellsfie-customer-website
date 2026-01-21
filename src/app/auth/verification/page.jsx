import { OTPForm } from "@/components/otp-form";

export default function OTPPage() {
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
      <div className="w-full max-w-xs">
        <OTPForm />
      </div>
    </div>
  );
}
