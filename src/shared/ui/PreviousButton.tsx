// src/shared/ui/PreviousButton.tsx

import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface PreviousButtonProps {
  className?: string;
  title?: string; // hover text
}

const PreviousButton: React.FC<PreviousButtonProps> = ({
  className = "",
  title = "Go back",
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      title={title}
      className={`text-gray-300 font-semibold py-3 px-6 rounded-full transition-colors duration-300 flex items-center gap-2 mb-4 ${className}`}
    >
      <FaArrowLeftLong className="text-xl" />
    </button>
  );
};

export default PreviousButton;
