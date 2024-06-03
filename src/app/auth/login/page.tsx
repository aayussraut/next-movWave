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
      <LoginForm />
    </AuthWrapper>
  );
}

{
  /* <div className="flex justify-center items-center  bg-[url('/login-bg.jpg')] bg-cover bg-center h-screen ">
<div className="flex flex-col justify-center items-center bg-[#131720] text-white w-96 rounded-xl p-10">
  <div className="text-3xl mb-10">
    <span className="text-white font-bold">mov</span>
    <span className="text-[#2f80ed] italic font-extrabold">Wave</span>
  </div>
  <div className="w-full flex flex-col gap-5 justify-center items-center">
    <Input
      placeholder="Email"
      className="bg-[#151f30] text-gray rounded-md "
    />
    <Input
      placeholder="Password"
      className="bg-[#151f30] text-gray rounded-md"
    />
    <Button className="bg-[#2f80ed] text-white w-full">Login</Button>
    <span className="text-xs">or</span>
    <div className="flex justify-center gap-5">
      <Button className="bg-[#3b5998] text-white">Facebook</Button>
      <Button className="bg-[#1da1f2] text-white">Twitter</Button>
      <Button className="bg-[#fbbc05] text-white">Google</Button>
    </div>
    <div className="flex flex-col text-sm items-center gap-2">
      <span>
        Don&apos;t have an account?{" "}
        <a href="#" className="text-[#2f80ed]">
          Sign up
        </a>
      </span>
      <a href="#" className="text-[#2f80ed]">
        Forgot password?
      </a>
    </div>
  </div>
</div>
</div> */
}
