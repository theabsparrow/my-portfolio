"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";

const ProjectComponent = ({ MyProjects }) => {
  return (
    <section>
      {MyProjects.map((project, index) => {
        const projectImages = project?.images;
        const technology = project?.usedTechnology;
        return (
          <div key={index}>
            <h1>{project?.projectName}</h1>
            <p>{project?.description}</p>
            <p>
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
              <div className="w-full h-[80vh]">
                {projectImages.map((image) => (
                  <SwiperSlide>
                    <Image
                      key={image?.name}
                      src={image.path}
                      alt={image.name}
                      height={1200}
                      width={1200}
                      className="object-contain w-[70vw] rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>

            <div className="flex items-center gap-2 mt-4">
              <p>Technology:</p>
              <Marquee speed={50} pauseOnHover>
                <div className="flex items-center space-x-4 ml-4">
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
              </Marquee>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectComponent;
