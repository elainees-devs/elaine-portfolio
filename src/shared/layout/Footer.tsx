//src/shared/layout/Footer.tsx
import { IoIosArrowForward } from "react-icons/io";
import { navItems } from "../../constants/navigation";
import SocialMedia from "../social-media-icons/SocialMedia";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 bg-slate-100 text-slateblue font-bold text-center py-8">
      <div className="grid grid-col w-[80%] mx-auto md:flex flex-row justify-between items-start gap-8 p-6 rounded-lg border-2 border-gray-300">
        {/* Logo & Info */}
        <div className="flex flex-col items-center max-w-xs">
          <p className="mb-4 text-3xl md:text-4xl flex items-center">
            <span className="bg-navy text-white p-0 text-xl md:text-2xl p-3 md:p-4 mr-2 rounded-full">
              EM
            </span>
            <span className="text-xl md:text-2xl">Elaine</span>
          </p>
          <p className="text-sm">
            &copy; 2025 Elaine Muhombe. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl mb-2">Navigation</h2>
          <ul className="px-16 space-y-2 text-sm">
            {navItems.map(({ name, path }) => (
              <li key={name} className="flex items-center gap-2">
                <IoIosArrowForward className="text-customBlueGray" />
                <a href={path} className="cursor-pointer hover:underline">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl mb-2">Follow Me</h2>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
