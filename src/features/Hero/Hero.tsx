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
        <div className="w-full md:w-1/2">
          <Badge text="hello" />

          {/* Main Heading */}
          <h2 className="text-xl md:text-6xl leading-tight text-white">
            I'm <span className="text-secondary">Elaine Muhombe,</span>
          </h2>

          <h3 className="mt-4 text-xl sm:text-2xl md:text-2xl font-medium text-white">
            a MERN Stack Developer passionate about building intuitive and
            scalable web applications.
          </h3>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-[1rem] text-secondary max-w-4xl">
            I specialize in developing full-stack solutions using MongoDB,
            Express.js, React, and Node.js. With a strong foundation in
            JavaScript and hands-on experience creating responsive,
            user-friendly interfaces and robust back-end systems, I bring ideas
            to life through clean code and modern development practices.
          </p>

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
              className="px-4 py-2 text-sm md:text-lg font-semibold text-white bg-transparent border border-secondary hover:bg-accent transition-colors duration-300 rounded-full"
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
