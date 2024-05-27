import Navbar from "@/components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
