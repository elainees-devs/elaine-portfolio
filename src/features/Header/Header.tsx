// src/features/Header/Header.tsx
import { Nav } from "../../shared/layout";
import Button from "../../shared/ui/Button";

const Header: React.FC = () => {
  return (
    <header className="md:bg-white p-1 rounded-full flex flex-col md:flex-row items-center justify-between gap-1 md:gap-2 md:mb-2 font-sans">
      <h1 className="text-lg sm:text-xl text-white md:text-2xl font-bold md:text-navy flex items-center">
        <span className="bg-navy text-white text-xs sm:text-sm md:text-base font-semibold p-1 mr-1 rounded-full">
          EM
        </span>
        Elaine
      </h1>

      <div className="w-full flex justify-center my-1">
        <Nav />
      </div>

      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <div className="flex-shrink-0 min-w-fit whitespace-nowrap">
          <Button
            text={"Let's Talk"}
            onClick={() => window.open("https://www.linkedin.com/", "_blank")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
