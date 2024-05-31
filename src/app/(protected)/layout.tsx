import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div>
        <Navbar />
        {children}
      </div>
    </SessionProvider>
  );
};

export default ProtectedLayout;
