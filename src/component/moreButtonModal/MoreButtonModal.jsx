"use client";

import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { TbLocation } from "react-icons/tb";

const MoreButtonModal = ({ containerRef }) => {
  const routes = [
    {
      name: "My Github Profile",
      description: "Explore my projects and contributions on Github",
      pathname: `${process.env.NEXT_PUBLIC_GITHUB_LINK}`,
      icon: IoLogoGithub,
    },
    {
      name: "Contact Me",
      description: "Have any Question? Feel free to reach out to me",
      pathname: "/contactMe",
      icon: TbLocation,
    },
  ];
  return (
    <section
      ref={containerRef}
      className="bg-[#c9c9ffE6] dark:bg-[#05092eE6] rounded-xl shadow-lg p-6 border"
    >
      <div>
        {routes.map((route) => {
          const IconComponent = route.icon;
          const isExternal = route.name === "My Github Profile";

          return (
            <Link
              key={route.pathname}
              href={route.pathname}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-[rgba(255,255,255,0.2)] dark:hover:bg-gray-700 duration-500"
            >
              <p className="bg-gray-500 p-2 rounded-lg">
                <IconComponent className="text-4xl text-black" />
              </p>
              <div className="flex flex-col leading-6">
                <span className="font-bold dark:text-white text-gray-900">
                  {route.name}
                </span>
                <span className="dark:text-[#AEB3B8] text-gray-700">
                  {route.description}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MoreButtonModal;
