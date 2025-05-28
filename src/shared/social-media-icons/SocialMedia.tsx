//src/shared/social-media-icons/SocialMedia.tsx
import { socialLinks } from "../../constants/socialLinks";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h2 className="text-lg text-customBlueGray font-semibold">
        Connect with Me
      </h2>
      <div className="flex space-x-4 text-2xl">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="text-customBlueGray hover:text-orange-500" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
