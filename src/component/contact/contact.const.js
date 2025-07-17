import { FaInstagram } from "react-icons/fa";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export const contactLink = [
  {
    name: "Email",
    path: "mailto:abulbashar@gmail.com",
    icon: MdAlternateEmail,
  },
  { name: "Discord", path: "https://discord.gg/msU2Epm5", icon: BsDiscord },
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
