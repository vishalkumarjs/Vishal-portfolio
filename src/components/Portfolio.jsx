import React from "react";
import business from "../assets/portfolio/business.png";
import codeeditor from "../assets/portfolio/codeeditor.png";
import datasecurity from "../assets/portfolio/datasecurity.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: business,
      link: "https://incredible-genie-a3db9f-business.netlify.app",
      code: "https://github.com/vishalGood/business_promotion_website"
    },
    {
      id: 2,
      src: codeeditor,
      link: "https://jocular-centaur-d406dc-codeeditor.netlify.app",
      code: "https://github.com/vishalGood/code_editor"
    },
    {
      id: 3,
      src: datasecurity,
      link: "https://stellular-kitten-43e3e7-datasecurity.netlify.app",
      code: "https://github.com/vishalGood/data_security_website"
    }
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 justify-center sm:px-0">
          {portfolios.map(({ id, src,link,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={link}  target="_blank"> Preview</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code}  target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
