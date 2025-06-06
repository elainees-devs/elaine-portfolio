// src/shared/ui/Button.tsx
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-32 bg-secondary border border-secondary text-navy font-semibold
    text-sm sm:text-base md:text-lg
    py-2 px-4 rounded-full transition-colors duration-300 w-36 sm:w-auto cursor-pointer"
    >
      <span className="flex items-center gap-1 sm:gap-2">
        {text} <GoArrowUpRight className="text-slateblue" />
      </span>
    </button>
  );
};

export default Button;
