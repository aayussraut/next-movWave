import { AuthWrapper } from "@/components/card/auth-wrapper";
import { FormError } from "@/components/form-error";

export default function ErrorPage() {
  return (
    <AuthWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      backButtonLinkLabel="Sign in!"
      showSocial={true}
    >
      <div className="w-full flex justify-center items-center">
        <FormError message="Oops! Something went wrong!" />
      </div>
    </AuthWrapper>
  );
}
