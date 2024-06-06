import { Suspense } from "react";
import Image from "next/image";

import { AuthWrapper } from "@/components/card/auth-wrapper";
import EmailVerificationForm from "@/components/form/email-verification-form";

export default function EmailVerification() {
  return (
    <AuthWrapper
      backButtonLabel="Back to"
      backButtonHref="/auth/login"
      backButtonLinkLabel="Login ?"
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
        <EmailVerificationForm />
      </Suspense>
    </AuthWrapper>
  );
}
