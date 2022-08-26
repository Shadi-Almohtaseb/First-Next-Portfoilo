import React from "react";
import Image from "next/image";
import contactImg from "../public/assets/contactImg.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex md:flex-row flex-col bg-[url('https://wallpaperaccess.com/full/1657858.jpg')] bg-no-repeat bg-cover lg:h-screen h-full lg:gap-3"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="lg:mt-14 mt-11  md:mb-20 bg-gradient-to-r from-blue-900 to-green-100 opacity-[0.92] px-5 py-8 rounded-xl w-[90%] md:ml-5">
          <div className="flex items-center justify-center flex-col relative opacity-100 text-opacity-100">
            <h3 className="uppercase text-white font-light text-2xl mb-14">
              Feel free to contact us
            </h3>

            <Image
              src={contactImg}
              alt="photo"
              width="590"
              height="300"
              className="rounded-xl"
            />
            <h2 className="text-white pt-8 font-light text-3xl text-center">
              Enjoy these colors and this combination, I loved it, the presence
              of such color mixing in any webpage gives good eye relief.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className=" md:mb-20 lg:mt-14 mt-8 mb-20 bg-gradient-to-r from-blue-500 to-fuchsia-400 opacity-90 px-5 py-8 rounded-xl w-[90%] lg:mr-5">
          <form className="flex items-center justify-center flex-col  gap-10">
            <div className="flex items-center justify-center flex-col lg:flex-row gap-10">
              <input
                placeholder="Name"
                type="text"
                className="pl-4 py-2 rounded-lg"
              />
              <input
                placeholder="Email"
                type="email"
                className="pl-4 py-2 rounded-lg"
              />
            </div>
            <textarea
              rows="4"
              cols="50"
              name="comment"
              form="usrform"
              className="p-6 rounded-xl w-[90%]"
              placeholder="your comment..."
            />
            <button className="px-8 py-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
