import Image from "next/image";
import React from "react";
import compouter from "../public/assets/comp.jpg";

const Main = () => {
  return (
    <div className="lg:px-14 flex flex-col lg:flex-row lg:items-start items-center w-full px-2 lg:gap-28 bg-[url('https://wallpaperaccess.com/full/1567665.png')] lg:h-screen h-full bg-no-repeat bg-cover">
      <div className="lg:text-start text-center flex-1 lg:mt-[11rem] mt-[7rem] w-full">
        <div className="text-white">
          <p className="mb-7">LET'S BUILD SOMETHING PHENOMENAL</p>
          <h2 className="text-5xl mb-6">
            Hi There, <span className="text-cyan-300">This is Shadi</span>{" "}
          </h2>
          <h3 className="text-3xl text-cyan-300 mb-9">I'm a web Develpoer,</h3>
          <h4 className=" text-blue-200 font-light text-lg ">
            i'm a front-end developer, i'm using a very special tools to build
            such an amazing web sites, and I hope you like it, nothing better
            than make a wonderful design that makes the customer happy.
          </h4>
        </div>
      </div>

      <div className="flex-1">
        <div className="lg:mt-[9rem] mt-[7rem] lg:mb-[6rem] mb-[2rem] bg-gradient-to-r from-zinc-900 to-zinc-700 rounded-xl px-5 lg:w-[31rem] sm:w-[29rem] w-[20rem] h-[35rem] flex items-center justify-center flex-col py-5">
          <Image
            className="rounded-lg"
            src={compouter}
            alt="computer-img"
            height="500"
            width="400"
          />
          <p className="px-12 py-7 lg:text-xl">
            In order to make a phenomenal websites, you have to spend hours or
            even days focusing on the details just to make the customer happy,
            with that's said , its still an exciting thing to do such things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
