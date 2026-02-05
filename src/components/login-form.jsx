"use client";

import { useState } from "react";
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
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import fbLogo from "@/assets/logo/fb-icon.png";
import googleLogo from "@/assets/logo/google-logo.png";
import { Eye, EyeOff } from "lucide-react";
import axiosInstance from "@/utility/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setToken } from "@/utility/helper";

export function LoginForm({ className, ...props }) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosInstance.post("api/client/login", formData);
      return res.data;
    },
    onSuccess: (response) => {
      if (response.token) {
        setToken(response.token);
      }
      toast.success("Login successful");
      // router.push(`/client/${response.data.id}`);
      router.push(`/profile`);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Login failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    mutation.mutate(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Facebook, or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  className="cursor-pointer"
                >
                  <img
                    src={fbLogo.src}
                    alt="Facebook Logo"
                    className="h-5 w-5 mr-0"
                  />
                  Login with Facebook
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="cursor-pointer"
                >
                  <img
                    src={googleLogo.src}
                    alt="Google Logo"
                    className="h-5 w-5 mr-0"
                  />
                  Login with Google
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="number"
                  required
                  className="focus-visible:border-green-700 focus-visible:ring-white"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="shop_id">Shop id</FieldLabel>
                <Input
                  id="shop_id"
                  type="number"
                  name="shop_id"
                  required
                  className="focus-visible:border-green-700 focus-visible:ring-white"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm no-underline hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="focus-visible:border-green-700 focus-visible:ring-white pr-10"
                    name="password"
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
                <Button
                  type="submit"
                  className="bg-green-700 cursor-pointer"
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? "Logging in..." : "Login"}
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="no-underline hover:underline">
                    Sign up
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center no-underline">
        By clicking continue, you agree to our{" "}
        <Link href="#" className="no-underline">
          Terms of Service
        </Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
