"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utility/axios";
import { toast } from "sonner";

export function OTPForm({ ...props }) {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedPhone = sessionStorage.getItem("verification_phone");
    if (!storedPhone) {
      toast.error("Phone number not found. Please signup again.");
      router.push("/signup");
      return;
    }
    setPhone(storedPhone);
  }, [router]);

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosInstance.post("api/client/verify-otp", formData);
      return res.data;
    },
    onSuccess: () => {
      toast.success("OTP verified successfully");
      sessionStorage.removeItem("verification_phone");
      router.push("/");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "OTP verification failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    mutation.mutate({
      otp: data.otp,
    });
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Enter verification code</CardTitle>
        <CardDescription>We sent a 4-digit code to your phone: {phone || "loading..."}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="otp">Verification code</FieldLabel>
              <InputOTP maxLength={4} id="otp" name="otp" required>
                <InputOTPGroup className="flex gap-3 text-center justify-center">
                  <InputOTPSlot
                    index={0}
                    className="w-12 h-12 text-center text-lg border rounded-md "
                  />
                  <InputOTPSlot
                    index={1}
                    className="w-12 h-12 text-center text-lg border rounded-md"
                  />
                  <InputOTPSlot
                    index={2}
                    className="w-12 h-12 text-center text-lg border rounded-md"
                  />
                  <InputOTPSlot
                    index={3}
                    className="w-12 h-12 text-center text-lg border rounded-md"
                  />
                </InputOTPGroup>
              </InputOTP>
              <FieldDescription>
                Enter the 4-digit code sent to your phone.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Button
                type="submit"
                className="bg-green-700 cursor-pointer"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Verifying..." : "Verify"}
              </Button>
              <FieldDescription className="text-center">
                Didn&apos;t receive the code? <a href="#">Resend</a>
              </FieldDescription>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
