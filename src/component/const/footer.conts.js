import { IoHomeOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { config } from "@/config";
import { MdOutlineArticle } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { MdOutlineContactEmergency } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const importantLinks = [
  { name: "home", path: "/", icon: IoHomeOutline },
  { name: "My work", path: "/myProjects", icon: GrProjects },
  { name: "Blog", path: "/blogs", icon: MdOutlineArticle },
  {
    name: "My Github",
    path: `${config.my_github}`,
    icon: IoLogoGithub,
  },
];

export const contactMeLinks = [
  { name: "Contact", path: "/contactMe", icon: MdOutlineContactEmergency },
  {
    name: "Email me",
    path: "mailto:abulbashar@gmail.com",
    icon: MdAlternateEmail,
  },
  { name: "Discord", path: "https://discord.gg/msU2Epm5", icon: BsDiscord },
];

export const socialLinks = [
  {
    name: "Twitter / X",
    path: "https://www.x.com/theabsparrow",
    icon: BsTwitterX,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/theabsparrow/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/ithesparrow/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/theabsparrow/",
    icon: FaFacebookF,
  },
];
