//src/features/Header/Header.tsx
import { Nav } from "../../shared/layout";
import Button from "../../shared/ui/Button";

const Header: React.FC = () => {
  return (
    <header className="md:bg-white p-4 rounded-full flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6 md:mb-6 font-sans">
      <h1 className="text-2xl sm:text-3xl text-white md:text-4xl font-bold md:text-navy flex items-center">
        <span className="bg-navy text-white text-lg sm:text-xl md:text-2xl font-semibold p-2 sm:p-3 md:p-4 mr-2 rounded-full">
          EM
        </span>
        Elaine
      </h1>

      <div className="w-full md:w-auto flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">
        <Nav />
        <Button
          text={"Let's Talk"}
          onClick={() => window.open("https://www.linkedin.com/", "_blank")}
        />
      </div>
    </header>
  );
};

export default Header;
