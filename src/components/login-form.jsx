import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import fbLogo from "@/assets/logo/fb-icon.png";
import googleLogo from "@/assets/logo/google-logo.png";

export function LoginForm({
  className,
  ...props
}) {
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
          <form>
            <FieldGroup>
              <Field>
                <Button variant="outline" type="button" className="cursor-pointer">
                  <img src={fbLogo.src} alt="Facebook Logo" className="h-5 w-5 mr-0" />
                  Login with Facebook
                </Button>
                <Button variant="outline" type="button" className="cursor-pointer">
                  <img src={googleLogo.src} alt="Google Logo" className="h-5 w-5 mr-0" />
                  Login with Google
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="email">Email/Phone</FieldLabel>
                <Input id="email" type="text" required className="focus-visible:border-green-700 focus-visible:ring-white"/>
              </Field>
              <Field>
                <FieldLabel htmlFor="shopId">Shop id</FieldLabel>
                <Input id="shopId" type="number" required className="focus-visible:border-green-700 focus-visible:ring-white"/>
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a href="#" className="ml-auto text-sm no-underline hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required className="focus-visible:border-green-700 focus-visible:ring-white"/>
              </Field>
              <Field>
                <Button type="submit" className="bg-green-700">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/signup" className="no-underline hover:underline">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center no-underline">
        By clicking continue, you agree to our <Link href="#" className="no-underline">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
