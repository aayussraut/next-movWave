import { IoCheckmarkCircleOutline } from "react-icons/io5";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 text-emerald-500 text-sm bg-emerald-500/15 p-3 rounded-md">
      <IoCheckmarkCircleOutline className="w-4 h-4" />
      <span>{message}</span>
    </div>
  );
};
