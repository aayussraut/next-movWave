import { SocialButton } from "../button/social-button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface AuthWrapperProps {
  backButtonLabel: string;
  backButtonLinkLabel: string;
  backButtonHref: string;
  children: React.ReactNode;
}

export const AuthWrapper = ({
  backButtonLabel,
  backButtonLinkLabel,
  backButtonHref,
  children,
}: AuthWrapperProps) => {
  return (
    <div className="flex justify-center items-center  bg-[url('/login-bg.jpg')] bg-cover bg-center h-screen ">
      <Card className="bg-[#131720] border-none text-white text-center">
        <CardHeader>
          <div className="text-3xl ">
            <span className="text-white font-bold">mov</span>
            <span className="text-[#2f80ed] italic font-extrabold">Wave</span>
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex flex-col gap-3">
          <span className="text-xs ">or</span>
          <SocialButton />
        </CardFooter>
        <CardFooter>
          <div className=" w-full text-center">
            <span>
              {backButtonLabel}{" "}
              <a href={backButtonHref} className="text-[#2f80ed]">
                {backButtonLinkLabel}
              </a>
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
