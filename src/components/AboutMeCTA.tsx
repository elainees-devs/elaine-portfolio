//src/components/AboutMeCTA.tsx
import Button from "../shared/ui/Button";
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AboutMeCTA = () => {
  const navigate = useNavigate();

  const handleResumeDownload = () => {
    window.open(
      "https://github.com/elaine-mern-dev/elaine-mern-dev/blob/main/resume_Elaine_Muhombe.pdf",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-4">
      <Button
        text={"Contact Me"}
        className="bg-orange-500 text-white hover:bg-orange-600 transition duration-300 w-36 sm:w-auto"
        onClick={() => navigate("/contacts")}
      />

      <button
        className="border border-primary rounded-full py-3 px-4 flex items-center justify-center
  text-sm sm:text-base lg:text-lg gap-2 w-full sm:w-auto
  text-navy hover:text-slateblue hover:border-slateblue transition duration-300"
        onClick={() => handleResumeDownload()}
      >
        Download my resume{" "}
        <span>
          <IoMdCloudDownload />
        </span>
      </button>
    </div>
  );
};

export default AboutMeCTA;
