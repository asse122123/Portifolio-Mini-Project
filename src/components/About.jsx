import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         this website is developed by using different computer languages like html,css,javascript and using different component
        </p>

        <br />

        <p className="text-xl">
          this website helps to us how to develop our skill in using css with tailwind and also react concepts
        </p>
      </div>
    </div>
  );
};

export default About;
