"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const ProjectComponent = ({ MyProjects }) => {
  return (
    <section className="space-y-10">
      {MyProjects.map((project, index) => {
        const projectImages = project?.images;
        const technology = project?.usedTechnology;
        const links = project?.links;
        return (
          <div key={index} className="space-y-4">
            <h1 className="text-2xl font-bold">{project?.projectName}</h1>
            <p className="md:w-[50vw]">{project?.description}</p>
            <p className="text-xl font-medium">
              {project?.from} - {project?.to}
            </p>

            <Swiper
              spaceBetween={0}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              navigation={true}
              className="mySwiper"
            >
              <div className="w-full md:h-[80vh]">
                {projectImages.map((image) => (
                  <SwiperSlide>
                    <Image
                      key={image?.name}
                      src={image.path}
                      alt={image.name}
                      height={1200}
                      width={1200}
                      className="object-contain md:w-[70vw] rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2 mt-4">
                <p>Technology:</p>
                <Marquee speed={50} pauseOnHover>
                  <div className="hidden md:flex items-center space-x-4 ml-4">
                    {technology.map((tech, index) => (
                      <div
                        key={index}
                        className=" h-12 border rounded-xl flex items-center justify-center gap-3 px-3 py-2 bg-white dark:bg-gray-500"
                      >
                        <div className="relative w-8 h-8">
                          <Image
                            src={tech.image}
                            alt={tech.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm md:text-base font-medium ">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden flex items-center space-x-4 ml-4">
                    {technology.map((tech, index) => (
                      <div
                        key={index}
                        className=" h-8 border rounded-xl flex items-center justify-center gap-3 px-3 py-2 bg-white/50 dark:bg-gray-600"
                      >
                        <div className="relative w-6 h-6">
                          <Image
                            src={tech.image}
                            alt={tech.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm md:text-base font-medium ">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
              <div className="flex items-center justify-between">
                {links.map((link, index) => (
                  <Link
                    href={link.path}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-2 py-1 rounded-xl hover:bg-gray-800 hover:text-white/80 dark:hover:bg-white/65 dark:hover:text-gray-900 duration-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col items-center gap-4 mt-8">
        <p>Want to see more?</p>
        <Link
          href="/myProjects"
          className="md:text-lg p-1 md:p-2 flex items-center gap-1 md:gap-2 bg-gray-400 hover:bg-gray-500 text-gray-900 rounded-lg font-semibold md:hover:gap-3 duration-500"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectComponent;
