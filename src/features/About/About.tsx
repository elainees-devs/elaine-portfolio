// src/features/About/About.tsx
import AboutMeCTA from "../../components/AboutMeCTA";
import Badge from "../../shared/ui/Badge";

const About: React.FC = () => {
  return (
    <section className="border-primary flex flex-col items-center text-montserrat">
      {/* Section label */}
      <div>
        <Badge text="About Me " />
      </div>

      {/* Container for left and right columns */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column: Heading and description */}
        <div className="w-full lg:w-1/2 max-w-prose">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 leading-tight">
            Get a web app that delivers unique value to your customers through a
            purpose-built digital experience.
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            I help organizations stand out online with websites and apps that
            are not just beautiful — but fast, responsive, and built to scale.
            Whether you're a startup looking to launch or a business ready to
            grow, I’ll deliver a product that wows your users and drives
            results. Let’s build something impactful — together!
          </p>
        </div>

        {/* Right column: Video and contact info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* Video section (wrapped in an <a> tag) */}
          <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden cursor-pointer">
            <a
              href="/videos/self-introductory.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-64 lg:h-96 rounded-lg overflow-hidden cursor-pointer relative"
            >
              <video
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                // No controls, no autoplay
              >
                <source src="/videos/self-introductory.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/50 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Contact info section */}
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 p-8 rounded-lg bg-slate-900 gap-6 text-sm md:text-base text-secondary">
          <div>
            <span className="font-semibold">Name:</span>
            <div className="text-white">Elaine Muhombe</div>
          </div>

          <div>
            <span className="font-semibold text-accent">Phone:</span>
            <div className="text-white">+(254) 701-21-7788</div>
          </div>

          <div>
            <span className="font-semibold text-accent">Email:</span>
            <div className="text-white">emuhombe@gmail.com</div>
          </div>

          <div>
            <span className="font-semibold text-accent">GitHub:</span>
            <div>
              <a
                href="https://github.com/elaine-mern-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-accent transition-colors"
              >
                github.com/elaine-mern-dev
              </a>
            </div>
          </div>
        </div>

        {/* Call-to-action buttons */}
        <div className="mt-8">
          <AboutMeCTA />
        </div>
      </div>

      {/* Horizontal rule */}
      <hr className="my-12 border-t border-muted w-3/4" />
    </section>
  );
};

export default About;
