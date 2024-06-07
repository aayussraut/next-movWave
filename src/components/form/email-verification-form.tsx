"use client";

import { emailVerification } from "@/actions/email-verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";

import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import Image from "next/image";

export default function EmailVerificationForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const onSubmit = useCallback(() => {

    if (success || error) {
      return;
    }

    if (!token) {
      setError("Invalid Token");
      return;
    }

    emailVerification(token)
      .then((res) => {
        if (res?.error) {
          setError(res.error);
        }
        if (res?.success) {
          setSuccess(res.success);
        }
      })
      .catch((error) => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex items-center w-full justify-center -mt-5 ">
      {!success && !error && (
        <Image
          src="../spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
          priority={true}
        />
      )}
      {!success && <FormError message={error} />}
      <FormSuccess message={success} />
    </div>
  );
}
