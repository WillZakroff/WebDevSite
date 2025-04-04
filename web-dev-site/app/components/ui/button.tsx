// components/ui/Button.tsx
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, onClick, className = "", type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
