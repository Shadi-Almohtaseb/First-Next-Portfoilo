import React from "react";
import Image from "next/image";
import compouter from "../public/assets/contact.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row flex-col bg-[url('https://wallpaperaccess.com/full/1657926.jpg')] bg-no-repeat bg-cover lg:h-screen h-full lg:gap-14"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="lg:mt-14 mt-11 lg:ml-14 md:mb-20 lg:pl-20 bg-gradient-to-r from-cyan-900 to-green-100 opacity-90 px-5 py-8 rounded-xl w-[90%] md:ml-5">
          <div className="relative opacity-100 text-opacity-100">
            <h3 className="uppercase text-white font-light text-lg mb-14">
              what about this specific project?
            </h3>
            <h1 className="text-white font-light text-4xl mb-11">
              This project is quite special, I built this project using great
              tools like{" "}
              <span className="text-purple-700">NEXT.JS Tailwind-Css</span> and
              <span className="text-purple-700"> React-Icons.</span>
            </h1>
            <h2 className="text-slate-800 font-light text-3xl">
              Enjoy these colors and this combination, I loved it, the presence
              of such color mixing in any webpage gives good eye relief.
            </h2>

            <button className="px-6 py-3 mt-7 ml-[30%]">Move To Skills</button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className=" md:mb-20 lg:mt-14 mt-8 mb-14 bg-gradient-to-r from-black to-sky-300 opacity-90 px-5 py-8 rounded-xl w-[90%] lg:mr-5">
          <div className="flex items-center justify-center flex-col">
            <Image
              src={compouter}
              alt="photo"
              width="550"
              hidden="350"
              className="rounded-2xl"
            />
            <h1 className="text-3xl text-sky-400 font-light pt-7 text-center">
              You might be wondering how programers have their own fun ? Well ,
              this is fun 🧐
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
