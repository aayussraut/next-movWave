import { AuthWrapper } from "@/components/card/auth-wrapper";
import RegisterForm from "@/components/form/register-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <AuthWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      backButtonLinkLabel="Sign in!"
      showSocial={true}
    >
      <RegisterForm />
    </AuthWrapper>
  );
}
