import { AuthWrapper } from "@/components/card/auth-wrapper";
import { FormError } from "@/components/form-error";

export default function ErrorPage() {
  return (
    <AuthWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to"
      backButtonLinkLabel="Sign in!"
    >
      <div className="w-full flex justify-center items-center -mt-5">
        <FormError message="Oops! Something went wrong!" />
      </div>
    </AuthWrapper>
  );
}
