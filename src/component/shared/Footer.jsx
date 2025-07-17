"use client";
import Image from "next/image";
import Link from "next/link";
import {
  contactMeLinks,
  importantLinks,
  socialLinks,
} from "../const/footer.conts";

const Footer = () => {
  return (
    <footer className="bg-[#c9c9ff] dark:bg-[#05092e] md:px-56 px-4 mt-16 pb-6">
      <hr className="my-6 dark:border-gray-400 border-gray-700" />
      <section className="flex flex-col md:flex-row md:justify-between items-start space-y-4  md:space-y-0 mt-8">
        <div className="flex flex-col items-center space-y-3 ">
          <div>
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={35}
                height={35}
                className="w-12 md:w-14"
              />
            </Link>
          </div>
          <h1 className="text-3xl font-semibold">Abul Bashar</h1>
          <p className="text-sm text-center ">
            {" "}
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-start  gap-2 ">
          <p className="text-lg text-gray-800 dark:text-white">
            Important Links
          </p>
          {importantLinks.map((link, index) => {
            const isExternal = link.name === "My Github";
            return (
              <Link
                key={index}
                href={link.path}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2"
              >
                <link.icon /> {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col items-start gap-2  ">
          <p className="text-lg text-gray-800 dark:text-white">Contact me</p>
          {contactMeLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <link.icon /> {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2  ">
          <p className="text-lg text-gray-800 dark:text-white">Social Links</p>
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <link.icon /> {link.name}
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
