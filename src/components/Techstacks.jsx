import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import cpp from "../assets/cpp.png";
import github from "../assets/github.png";
import git from "../assets/git.png"
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express3.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"

export default function Techstacks(){
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: node,
          title: "NodeJs",
          style: "shadow-green-400",
        },
        {
          id: 6,
          src: cpp,
          title: "C++",
          style: "shadow-gray-400",
        },
        {
          id: 7,
          src: git,
          title: "Git",
          style: "shadow-red-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 10,
          src: express,
          title: "Express",
          style: "shadow-gray-400",
        },
        {
          id: 11,
          src: mongodb,
          title: "MongoDB",
          style: "shadow-green-500",
        },
        {
          id: 12,
          src: redux,
          title: "Redux",
          style: "shadow-purple-500",
        },
      ];
    
      return (
        <div id="skills" className="mx-auto max-w-screen-2xl">
          <div className="p-4 lg:p-20 flex flex-col justify-center w-full h-full">
            <div className="">
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Skills & Techstacks</p>
              <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center py-8 md:px-12 sm:px-0">
              {techs.map((data) => (
                <div
                  key={data.id}
                  className= "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400"
                >
                  <img src={data.src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
