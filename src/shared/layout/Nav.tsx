// src/shared/layout/Nav.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../constants/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Feather icons menu and close

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger button - visible only on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 hover:text-orange-500"
        aria-label="Toggle navigation"
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Horizontal nav - visible on medium+ screens */}
      <nav className="hidden md:flex justify-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-700 hover:text-tealAccent font-semibold"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Dropdown menu - visible on small screens when open */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg flex flex-col z-50 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-tealAccent font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
