import { AuthWrapper } from "@/components/card/auth-wrapper";
import ResetPasswordForm from "@/components/form/reset-password-form";

export default function ResetPassword() {
  return (
    <AuthWrapper
      backButtonLabel="Back to"
      backButtonHref="/auth/login"
      backButtonLinkLabel="Login ?"
    >
      <ResetPasswordForm />
    </AuthWrapper>
  );
}
