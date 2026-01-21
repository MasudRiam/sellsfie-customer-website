"use client";

import { cn } from "@/lib/utils";
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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axiosInstance from "@/utility/axios";
import { Eye, EyeOff } from "lucide-react";

export function SignupForm({ className, ...props }) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const mutation = useMutation({
    mutationFn: async (fromData) => {
      const signupRes = await axiosInstance.post("api/client/signup", fromData);
      await axiosInstance.post("api/client/send-otp", {
        phone: fromData.phone,
        email: ""
      });
      return signupRes.data;
    },
    onSuccess: () => {
      toast.success("Account created | OTP sent to your phone");
      router.push("/auth/verification");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Signup failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromData = new FormData(e.target);
    const data = Object.fromEntries(fromData.entries());

    if (data.password !== data.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }

    mutation.mutate(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  required
                  className="focus-visible:border-green-700 focus-visible:ring-white"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  required
                  className="focus-visible:border-green-700 focus-visible:ring-white"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="shop_id">Shop Id</FieldLabel>
                <Input
                  id="shop_id"
                  name="shop_id"
                  required
                  className="focus-visible:border-green-700 focus-visible:ring-white"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input
                  id="address"
                  name="address"
                  required
                  className="focus-visible:border-green-700 focus-visible:ring-white"
                />
              </Field>

              <Field className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="focus-visible:border-green-700 focus-visible:ring-white pr-10"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </Field>

                <Field>
                  <FieldLabel htmlFor="password_confirmation">
                    Confirm Password
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      id="password_confirmation"
                      name="password_confirmation"
                      type={confirmShowPassword ? "text" : "password"}
                      required
                      className="focus-visible:border-green-700 focus-visible:ring-white pr-10"
                    />
                    <button
                      onClick={() =>
                        setConfirmShowPassword(!confirmShowPassword)
                      }
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      {confirmShowPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </Field>
              </Field>

              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>

              <Button
                type="submit"
                className="bg-green-700 cursor-pointer"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Creating..." : "Create Account"}
              </Button>

              <FieldDescription className="text-center">
                Already have an account?{" "}
                <Link href="/login" className="hover:underline">
                  Log In
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
