import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex items-center justify-center flex-col bg-[url('https://wallpaperaccess.com/full/1567666.png')] bg-no-repeat bg-cover lg:h-screen h-full p-24"
    >
      <div className="px-6 py-8 bg-gradient-to-r from-zinc-900 to-zinc-700 rounded-xl my-9">
        <p className="text-2xl">My skills With the wonderful tools </p>
      </div>
      <div className=" flex items-center justify-center flex-wrap gap-11">
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl ">
          <Image
            src="/../public/assets/Skills/html.png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">HTML</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/Css.png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">CSS</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/javascript.png"
            alt="html"
            width="64px"
            height="64px"
            className="rounded-xl"
          />
          <p className="text-xl">JavaScript</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/react (1).png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">React</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/tailwind (1).png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">Tailwind Css</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/MATERIAL-UI.png"
            alt="html"
            width="64px"
            height="64px"
            className="rounded-xl"
          />
          <p className="text-xl">Material UI</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/firebase.png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">Firebase</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/github1.png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">GitHub</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/node.png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">Node.Js</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/nextjs.png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">Next.Js</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/bootstarp.jpg"
            alt="html"
            width="64px"
            height="64px"
            className="rounded-xl"
          />
          <p className="text-xl">Bootstrap</p>
        </div>
        <div className="flex items-center justify-center gap-14 color-change-2x px-3 py-2 rounded-xl">
          <Image
            src="/../public/assets/Skills/git.png"
            alt="html"
            width="64px"
            height="64px"
          />
          <p className="text-xl">Git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
