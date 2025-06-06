// src/shared/ui/Badge.tsx
import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  const largeTextBadges = ["My Skills", "Projects"];
  const isLargeText = largeTextBadges.includes(text);

  return (
    <span
      className={`inline-block mb-6 py-2 px-4 w-36 
        text-white text-center font-bold rounded-full 
        border-2 border-white 
        ${
          isLargeText ? "text-base md:text-[1.875rem]" : "text-sm md:text-base"
        } 
        ${className || ""}`}
    >
      {text}
    </span>
  );
};

export default Badge;
