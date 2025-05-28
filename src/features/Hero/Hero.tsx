// src/features/Hero/Hero.tsx
import Badge from "../../shared/ui/Badge";
import Button from "../../shared/ui/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:py-20">
        {/* Text Section */}
        <div className="md:-mt-28 w-full md:w-1/2">
          <Badge text="hello" />

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
            I'm <span className="text-primary">Elaine Muhombe,</span>
            <br />A MERN Developer
          </h2>

          {/* Subheading */}
          <h4 className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-tealAccent font-semibold">
            Building Scalable Applications with Seamless Integration and
            Innovative Solutions
          </h4>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              text="Portfolio"
              className="h-10 md:h-auto"
              onClick={() => navigate("/portfolio")}
            />
            <button
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=emuhombe@gmail.com"
                )
              }
              className="px-4 py-2 text-sm md:text-lg font-semibold text-white bg-transparent border border-primary hover:bg-accent transition-colors duration-300 rounded-full"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/images/elaine-photo.png"
            alt="Elaine Muhombe"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Horizontal Divider */}
      <hr className="my-12 border-t border-muted w-3/4" />
    </>
  );
};

export default Hero;
