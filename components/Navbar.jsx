import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../public/assets/navLogo.png";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Navbar = () => {
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY <= 205) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleNavScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full shadow-xl z-[100] h-[5rem] flex items-center justify-center pt-20">
      <div
        className={
          navScroll
            ? "flex justify-between items-center w-full h-[10rem] pb-20 px-7 2xl:px-16"
            : "flex justify-between items-center px-7 2xl:px-16 fixed top-0 w-[92%] h-[4.5rem] bg-gradient-to-r from-sky-300 to-indigo-900 opacity-90 ease-in-out duration-500 mt-2 rounded-full"
        }
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="130"
            height="60"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="hidden md:flex gap-11">
            <Link href="/">
              <li className="text-sm text-white px-2 uppercase hover:font-semibold w-16">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="text-sm text-white px-2 uppercase hover:font-semibold w-16">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="text-sm text-white px-2 uppercase hover:font-semibold w-16">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="text-sm text-white px-2 uppercase hover:font-semibold w-16">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="text-sm text-white px-2 uppercase hover:font-semibold w-16">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={() => setDisplaySideBar(true)}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenuFold color="white" size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          displaySideBar
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/60"
            : ""
        }
      >
        <div
          className={
            displaySideBar
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[40%] h-full bg-gradient-to-r from-sky-300 to-indigo-900 p-10 ease-in duration-500"
              : "fixed left-[-170%] top-0 p-10 ease-in duration-500 bg-gradient-to-r from-sky-300 to-indigo-900 h-full"
          }
        >
          <div className="-mt-6">
            <div className="flex justify-between items-center">
              <Link href="/">
                <Image src={Logo} alt="Logo" width="88" height="55" />
              </Link>
              <div
                onClick={() => setDisplaySideBar(false)}
                className="bg-[#f7f7f3] p-2 rounded-full shadow-lg cursor-pointer"
              >
                <AiOutlineClose size={24} color="blue" />
              </div>
            </div>
            <div className="my-6">
              <p className="text-white">
                Lets build something legendary together
              </p>
            </div>
            <hr className="absolute w-[80%]" />
          </div>
          <div>
            <ul className="flex flex-col items-center justify-center">
              <Link href="/">
                <li
                  onClick={() => setDisplaySideBar(false)}
                  className="py-3 w-[80%] text-center text-lg my-3 bg-[#f7f7f3] p-2 rounded-full shadow-lg cursor-pointer uppercase hover:font-semibold hover:bg-slate-300 hover:ease-in duration-100"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setDisplaySideBar(false)}
                  className="py-3 w-[80%] text-center text-lg my-3 bg-[#f7f7f3] p-2 rounded-full shadow-lg cursor-pointer uppercase hover:font-semibold hover:bg-slate-300 hover:ease-in duration-100"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setDisplaySideBar(false)}
                  className="py-3 w-[80%] text-center text-lg my-3 bg-[#f7f7f3] p-2 rounded-full shadow-lg cursor-pointer uppercase hover:font-semibold hover:bg-slate-300 hover:ease-in duration-100"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setDisplaySideBar(false)}
                  className="py-3 w-[80%] text-center text-lg my-3 bg-[#f7f7f3] p-2 rounded-full shadow-lg cursor-pointer uppercase hover:font-semibold hover:bg-slate-300 hover:ease-in duration-100"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setDisplaySideBar(false)}
                  className="py-3 w-[80%] text-center text-lg my-3 bg-[#f7f7f3] p-2 rounded-full shadow-lg cursor-pointer uppercase hover:font-semibold hover:bg-slate-300 hover:ease-in duration-100"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <hr className="my-4" />
          <div className="-mr-20">
            <div className="uppercase mb-6">
              <p className="text-white">Lets Contact</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-wrap gap-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg cursor-pointer mr-14 hover:scale-[1.2] duration-200">
                  <FaFacebookF
                    size={25}
                    color="white"
                    onClick={() => setDisplaySideBar(false)}
                  />
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg cursor-pointer mr-14 hover:scale-[1.2] duration-200">
                  <FaInstagram
                    size={25}
                    color="white"
                    onClick={() => setDisplaySideBar(false)}
                  />
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg cursor-pointer mr-14 hover:scale-[1.2] duration-200">
                  <FaGithub
                    size={25}
                    color="white"
                    onClick={() => setDisplaySideBar(false)}
                  />
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg cursor-pointer mr-14 hover:scale-[1.2] duration-200">
                  <FaLinkedinIn
                    size={25}
                    color="white"
                    onClick={() => setDisplaySideBar(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
