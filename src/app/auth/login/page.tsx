import Image from "next/image";
import { Suspense } from "react";

import { AuthWrapper } from "@/components/card/auth-wrapper";
import LoginForm from "@/components/form/login-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <AuthWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      backButtonLinkLabel="Sign up!"
      showSocial={true}
    >
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full">
            <Image
              src="../spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
              priority={true}
            />
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </AuthWrapper>
  );
}
