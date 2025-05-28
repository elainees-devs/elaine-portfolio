//src/features/Projects/edusynx/Edusynx.tsx
import React from "react";

const Edusynx: React.FC = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Edusynx</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 bg-white">
          <h3 className="text-xl font-semibold mb-2">Edusynx</h3>
          <p className="text-gray-700 mb-4">
            A MERN stack application that modernizes school operations by
            automating tasks like enrollment, attendance, and performance
            tracking.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/elamuhombe/gomycode-mern-edusynx-school-management-system.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://edusynx.elainees.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edusynx;
