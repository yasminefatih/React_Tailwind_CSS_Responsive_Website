import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="text-[#6A5ACD] font-bold">PERSONALIZED DATA INSIGHTS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-800">
            Unleash the Power of Data
          </h1>
          <p className="text-gray-700">
            Discover a tailored dashboard experience designed for clarity and
            simplicity. Whether analyzing trends or optimizing strategies, this
            platform empowers you with the data insights needed to make informed
            decisions. Join me on a journey towards efficient data management.
          </p>
          <button className="bg-[#6A5ACD] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#5a4cad] transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
