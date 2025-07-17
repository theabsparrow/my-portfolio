"use client";

import Link from "next/link";
import { moreButtonroutes } from "../const/navbar.const";

const MoreButtonModal = ({ containerRef, setOpen }) => {
  return (
    <section className="bg-[#c9c9ffE6] dark:bg-[#05092eE6] rounded-xl shadow-lg p-6 border">
      <div>
        {moreButtonroutes.map((route) => {
          const IconComponent = route.icon;
          const isExternal = route.name === "My Github Profile";

          return (
            <Link
              key={route.pathname}
              href={route.pathname}
              onClick={() => setOpen(false)}
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
