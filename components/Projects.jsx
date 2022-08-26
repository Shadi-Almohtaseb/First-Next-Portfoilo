import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex items-center justify-center flex-col bg-[url('https://wallpaperaccess.com/full/1658070.jpg')] h-full px-14 py-8 bg-no-repeat bg-cover"
    >
      <div className="px-6 py-8 bg-gradient-to-r from-zinc-900 to-zinc-400 rounded-xl my-9">
        <p className="text-2xl">
          Some of my awesome projects with React and other tools
        </p>
      </div>
      <div className=" flex items-center justify-center flex-wrap gap-6">
        <div className="relative flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl hover:color-change-2x hover:cursor-pointer">
          <Image
            src="/../public/assets/Projects/Ig-project.png"
            alt="html"
            width="720"
            height="410"
            className="hover:opacity-30 rounded-lg"
          />
          <div className="opacity-0 w-full h-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:cursor-pointer hover:opacity-80 absolute ">
            <p className="text-4xl mt-[20%] ml-[20%]">
              Instagram Reels Clone Project
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Projects/sim-facebook.png"
            alt="html"
            width="720"
            height="410"
            className="hover:opacity-30 rounded-lg"
          />
          <div className="opacity-0 w-full h-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:cursor-pointer hover:opacity-80 absolute ">
            <p className="text-4xl mt-[20%] ml-[20%]">Social media app</p>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl hover:color-change-2x hover:cursor-pointer">
          <Image
            src="/../public/assets/Projects/e-commerce.png"
            alt="html"
            width="720"
            height="410"
            className="hover:opacity-30 rounded-lg"
          />
          <div className="opacity-0 w-full h-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:cursor-pointer hover:opacity-80 absolute ">
            <p className="text-4xl mt-[20%] ml-[20%]">Ecommerce app </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl hover:color-change-2x hover:cursor-pointer">
          <Image
            src="/../public/assets/Projects/dashboard.png"
            alt="html"
            width="720"
            height="410"
            className="hover:opacity-30 rounded-lg"
          />
          <div className="opacity-0 w-full h-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:cursor-pointer hover:opacity-80 absolute ">
            <p className="text-4xl mt-[20%] ml-[20%]">Dashboard app </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl hover:color-change-2x hover:cursor-pointer">
          <Image
            src="/../public/assets/Projects/TodoApp.png"
            alt="html"
            width="720"
            height="410"
            className="hover:opacity-30 rounded-lg"
          />
          <div className="opacity-0 w-full h-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:cursor-pointer hover:opacity-80 absolute ">
            <p className="text-4xl mt-[20%] ml-[20%]">Todo app </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl hover:color-change-2x hover:cursor-pointer">
          <Image
            src="/../public/assets/Projects/portfolio.png"
            alt="html"
            width="720"
            height="410"
            className="hover:opacity-30 rounded-lg"
          />
          <div className="opacity-0 w-full h-full hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl hover:cursor-pointer hover:opacity-80 absolute ">
            <p className="text-4xl mt-[20%] ml-[20%]">
              Portfoilo with React.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
