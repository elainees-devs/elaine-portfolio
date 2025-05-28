//src/pages/Contact.tsx
import { Footer, Nav } from "../shared/layout";
import SocialMedia from "../shared/social-media-icons/SocialMedia";

const Contact: React.FC = () => {
  return (
    <>
      <div className="md:-mt-36 w-full flex flex-col max-w-3xl mx-auto min-h-screen p-2">
        <div className=" flex flex-col items-center justify-center  w-full flex-grow">
          <>
            <div className="grid grid-cols-1 justify-items-start -mt-48 md:mt-0 md:justify-items-center w-full">
              <Nav />
            </div>

            <h1 className="text-4xl font-bold my-8">Contact Me</h1>
            <p className="text-lg text-Accent mb-4">
              I would love to hear from you!
            </p>

            <div className="text-lg text-gray-800 space-y-2 mb-8">
              <SocialMedia />
            </div>
          </>
        </div>
      </div>

      {/* Full-width Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
