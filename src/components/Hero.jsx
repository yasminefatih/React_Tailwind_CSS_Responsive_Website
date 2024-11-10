import React from "react";
import { ReactTyped as Typed } from "react-typed";

const Hero = () => {
  return (
    <div className="text-gray-800 bg-gradient-to-b from-purple-100 to-indigo-200">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#6A5ACD] font-bold p-2">
          EMBRACING TECHNOLOGY WITH PASSION
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-800">
          Welcome to Yasmine's World.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-gray-700">
            Dedicated to
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-700"
            strings={[
              "Web Development",
              "Creative Solutions",
              "Continuous Learning",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600 px-4">
          Let's build innovative web experiences that bring ideas to life!
        </p>
        <button className="bg-[#6A5ACD] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-[#5a4cad] transition duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Hero;
