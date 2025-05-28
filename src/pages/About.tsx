// src/pages/About.tsx
import { Footer, Nav } from "../shared/layout";

const About: React.FC = () => {
  return (
    <>
      <div className="mt-8 w-full md:flex flex-col items-center justify-center max-w-3xl mx-auto">
        <Nav />
        <div className="px-4 mt-8">
          <h1 className="text-4xl font-bold my-6">About Me</h1>

          <h3 className="text-xl font-semibold mb-2">Bio</h3>
          <div className="text-lg text-customBlueGray leading-relaxed">
            <p>
              I'm Elaine Muhombe, a dedicated and detail-oriented Full-Stack
              JavaScript Developer with a strong foundation in the{" "}
              <span className="text-secondary font-semibold">
                MERN stack (MongoDB, Express.js, React, Node.js)
              </span>
              . What makes me unique is my combination of technical expertise
              and a business background—I hold a degree in Business Information
              Technology and am a graduate of GOMYCODE Kenya's Full-Stack JS
              Bootcamp. I’m deeply passionate about building scalable,
              user-focused web applications that solve real-world problems
              through clean, efficient code.
            </p>

            <p className="mt-4">
              Beyond development, I love empowering others through technology.
              I’ve introduced young students to HTML, CSS, and Bootstrap in fun
              and engaging ways, nurturing the next generation of tech
              enthusiasts. My work allows me to create meaningful solutions with
              real impact. Whether developing e-commerce platforms,
              recipe-sharing apps, or AI-powered meal planners, I’m driven by
              the belief that technology should serve people and communities,
              improving lives and creating opportunities.
            </p>

            <p className="mt-4">
              Currently, I’m expanding my skills in backend development using
              Python frameworks like Django and Flask, secure payment
              integrations, cloud services, database optimization, and AI
              integration. I’m excited to collaborate on projects and roles that
              challenge me to grow as both a developer and a problem solver,
              while staying true to my mission of using technology to empower
              and uplift.
            </p>

            <blockquote className="mt-8 p-4 italic text-navy bg-tealAccent pl-4 font-robotoSlab rounded-lg shadow-md">
              “Technology is most powerful when it empowers people and
              transforms communities.”
            </blockquote>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
