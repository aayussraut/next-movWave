import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 text-destructive text-sm bg-destructive/15 p-3 rounded-md">
      <BsExclamationTriangle className="w-4 h-4" />
      <span>{message}</span>
    </div>
  );
};
