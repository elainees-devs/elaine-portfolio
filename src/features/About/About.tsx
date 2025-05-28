// src/features/About/About.tsx
import AboutMeCTA from "../../components/AboutMeCTA";
import Badge from "../../shared/ui/Badge";

const About: React.FC = () => {
  return (
    <section className="border-primary">
      {/* Section label */}
      <div>
        <Badge text="About Me" />
      </div>

      {/* Container for left and right columns */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column: Heading and description */}
        <div className="w-full lg:w-1/2 text-primary max-w-prose">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 leading-tight">
            Get a web app that delivers unique value to your customers through a
            purpose-built digital experience.
          </h2>

          <p className="text-tealAccent text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            I help organizations stand out online with websites and apps that
            are not just beautiful — but fast, responsive, and built to scale.
            Whether you're a startup looking to launch or a business ready to
            grow, I’ll deliver a product that wows your users and drives
            results. Let’s build something impactful — together!
          </p>
        </div>

        {/* Right column: Video and contact info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* Video section */}
          <div className="w-full">
            <video className="w-full h-64 lg:h-96 rounded-lg" controls>
              <source src="/videos/self-introductory.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Contact info section */}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 p-8 rounded-lg bg-slate-900 gap-6 text-sm md:text-base text-primary">
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
