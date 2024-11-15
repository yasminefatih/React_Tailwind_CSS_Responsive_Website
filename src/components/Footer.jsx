import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-100 to-purple-100 py-16 px-4 text-gray-800">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#6A5ACD]">
            MyWebsites.
          </h1>
          <p className="py-4 text-gray-700">
            Helping you grow with data analytics and innovative solutions. Join
            us to start your journey.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare
              size={30}
              className="text-[#6A5ACD] hover:text-[#5a4cad] transition duration-300"
            />
            <FaInstagram
              size={30}
              className="text-[#6A5ACD] hover:text-[#5a4cad] transition duration-300"
            />
            <FaTwitterSquare
              size={30}
              className="text-[#6A5ACD] hover:text-[#5a4cad] transition duration-300"
            />
            <FaGithubSquare
              size={30}
              className="text-[#6A5ACD] hover:text-[#5a4cad] transition duration-300"
            />
            <FaDribbbleSquare
              size={30}
              className="text-[#6A5ACD] hover:text-[#5a4cad] transition duration-300"
            />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-600">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-600">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-600">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-600">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
