import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-12">
        Meet Vishal Kumar, a passionate and dedicated individual with a flair for coding and a keen interest in becoming a frontend web developer.I possesses a robust skill set, showcasing proficiency in HTML, CSS, and JavaScript.My expertise extends to popular frontend frameworks such as React, along with a mastery of responsive design through frameworks like Bootstrap and Tailwind CSS.
        </p>

        <br />

        <p className="text-xl">
        Vishal Kumar's journey is defined by a continuous pursuit of excellence, and I aspire to contribute innovative solutions to the ever-evolving world of web development. If you are seeking a dynamic and skilled frontend web developer,I will be the ideal candidate to bring your digital projects to life.
        </p>
      </div>
    </div>
  );
};

export default About;
