import { AuthWrapper } from "@/components/card/auth-wrapper";
import NewPasswordForm from "@/components/form/new-password-form";

export default function NewPassword() {
  return (
    <AuthWrapper
      backButtonLabel="Back to"
      backButtonHref="/auth/login"
      backButtonLinkLabel="Login ?"
    >
      <NewPasswordForm />
    </AuthWrapper>
  );
}
