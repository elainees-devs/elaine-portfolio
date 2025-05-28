// src/constants/socialLinks.ts
import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";


export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/elaine-muhombe/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/elaine-mern-dev",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://x.com/emuhombe",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://wa.me/+254701217788",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

