"use client";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeModal from "../thrmeModal/ThemeModal";
import MoreButtonModal from "../moreButtonModal/MoreButtonModal";
import Image from "next/image";
import { desktopRoutes, routes } from "../const/navbar.const";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkOverlayVisible, setDarkOverlayVisible] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setTimeout(() => setOpen(false), 0);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleMenuToggle = () => {
    setMenuOpen(true);
    setDarkOverlayVisible(true);

    setTimeout(() => {
      setDarkOverlayVisible(false);
      setShowMenuContent(true);
    }, 500);
  };

  const handleClose = () => {
    setTimeout(() => {
      setMenuOpen(false);
      setDarkOverlayVisible(false);
      setShowMenuContent(false);
    }, 500);
  };
  return (
    <nav className="sticky top-0 z-20 md:px-56 px-4 py-1 bg-[#c9c9ff] dark:bg-[#05092e]">
      <section className="flex justify-between h-16 items-center relative">
        <div className=" flex items-center space-x-8">
          <Link href="/" className=" cursor-pointer ">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={35}
              height={35}
              className="w-12 md:w-14"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {desktopRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.pathname}
                className={`text-gray-900 dark:text-white text-lg  py-2 px-2 rounded-xl ${
                  pathname === route.pathname
                    ? "bg-gray-600 dark:bg-[#c9c9ff99] text-white"
                    : "hover:text-purple-600 duration-500"
                }`}
              >
                {route.name}
              </Link>
            ))}
            <div ref={containerRef}>
              <button
                onClick={() => setOpen(!open)}
                className="group text-lg text-gray-900 dark:text-white hover:text-white hover:dark:text-purple-600 duration-500 hidden md:flex items-center gap-2 py-2 px-2 hover:bg-gray-600 hover:dark:bg-[#c9c9ff99] rounded-xl cursor-pointer "
              >
                More{" "}
                <IoIosArrowForward
                  className={`transform transition-transform duration-300 group-hover:rotate-90 ${
                    open && "rotate-90"
                  }`}
                />
              </button>
              <div className="absolute md:top-[68px] left-44 w-[38%] hidden md:flex ">
                {open && <MoreButtonModal setOpen={setOpen} />}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <button
            onClick={handleMenuToggle}
            className="text-gray-800 focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen || (
              <CiMenuFries className="dark:text-white text-gray-900 text-2xl rotate-180" />
            )}
          </button>
          <ThemeModal />
        </div>
      </section>

      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {darkOverlayVisible && (
            <div className="absolute inset-0 bg-black dark:bg-white opacity-50  transition-opacity duration-300 ease-in-out pointer-events-none" />
          )}
          {showMenuContent && (
            <div className="absolute w-[88vw] inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col space-y-6 p-6 animate-fadeInMenu">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  href={route.pathname}
                  className={` dark:text-white hover:text-purple-600 duration-500 flex items-center gap-2 py-2 px-2  rounded-xl ${
                    pathname === route.pathname
                      ? "bg-[#05092e] dark:bg-[#c9c9ff99] text-white"
                      : "bg-[#c9c9ff99] dark:bg-[#05092e] text-gray-700"
                  }`}
                  onClick={route.name === "Home" && handleClose}
                >
                  {route.name} <IoArrowForwardOutline />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
