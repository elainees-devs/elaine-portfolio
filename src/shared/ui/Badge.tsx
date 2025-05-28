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
      className={`inline-block mb-6 py-2 px-4 w-36 border border-primary bg-primary/10 
      text-primary text-center font-bold rounded-full ${
        isLargeText ? "text-[1.875rem]" : "text-sm md:text-base"
      } ${className || ""}`}
    >
      {text}
    </span>
  );
};

export default Badge;
