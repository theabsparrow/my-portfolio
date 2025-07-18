"use client";

import Link from "next/link";
import { contactLink } from "./contact.const";
import ContactForm from "./ContactForm";
import { IoArrowForwardOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";

const ContactComponent = () => {
  return (
    <section className=" space-y-4">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Contact me <span className="text-blue-700">.</span>
        </h1>
        <p className="text-lg">
          I’m always eager to explore new opportunities and take on exciting
          projects. If you have a project in mind, or just want to say hi, feel
          free to send me a message.
        </p>
      </div>
      <ContactForm />
      <div className="space-y-4 text-lg">
        <p>Or contact me with...</p>
        <div className="hidden md:flex items-center justify-between">
          {contactLink.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 border px-2 py-1 rounded-lg hover:bg-white hover:border-gray-900 hover:text-gray-900 duration-500`}
            >
              <link.icon
                className={`${link.name === "Discord" && "text-blue-700"} ${
                  link.name === "Instagram" && "text-[#ff00ff]"
                } ${link.name === "Facebook" && "text-blue-600"} `}
              />{" "}
              {link.name} <IoArrowForwardOutline />
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <Marquee speed={20} direction="right" pauseOnHover>
            {contactLink.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 border px-1 py-1 rounded-lg hover:bg-white hover:border-gray-900 hover:text-gray-900 duration-500 ml-4`}
              >
                <link.icon
                  className={`${link.name === "Discord" && "text-blue-700"} ${
                    link.name === "Facebook" && "text-blue-600"
                  } ${link.name === "Instagram" && "text-[#ff00ff]"}`}
                />{" "}
                {link.name} <IoArrowForwardOutline />
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
