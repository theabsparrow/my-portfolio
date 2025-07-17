import { config } from "@/config";
import { TbLocation } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

export const routes = [
  { name: "Home", pathname: "/" },
  { name: "My Work", pathname: "/myProjects" },
  { name: "Blog", pathname: "/blogs" },
  { name: "My Github", pathname: `${config.my_github}` },
  { name: "Contact Me", pathname: "/contactMe" },
];
export const desktopRoutes = [
  { name: "Home", pathname: "/" },
  { name: "My Work", pathname: "/myProjects" },
  { name: "Blog", pathname: "/blogs" },
];

export const moreButtonroutes = [
  {
    name: "My Github Profile",
    description: "Explore my projects and contributions on Github",
    pathname: `${config.my_github}`,
    icon: IoLogoGithub,
  },
  {
    name: "Contact Me",
    description: "Have any Question? Feel free to reach out to me",
    pathname: "/contactMe",
    icon: TbLocation,
  },
];
