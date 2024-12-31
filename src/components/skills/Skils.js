import HTML from "../icons/HTML";
import JAVA from "../icons/JAVA";
import Php from "../icons/Php";
import Spring from "../icons/Spring";
import CSS from "../icons/CSS";
import JS from "../icons/JS";


import React from 'react';
import Laravel from "../icons/Laravel";
import Angular from "../icons/Angular";
import Tailwind from "../icons/Tailwind";
import Bootstrap from "../icons/Bootstrap";
import Jira from "../icons/Jira";
import Trello from "../icons/Trello";
import Git from "../icons/Git";
import Figma from "../icons/Figma";
import { title } from "framer-motion/client";
import Docker from "../icons/Docker";
import Postman from "../icons/Postman";
import Intellij from "../icons/Intellij";


const Skills = () => {
  const skills = [
    {
      id: 1,
      title: 'Back End',
      langage: [
        {
          Image: <JAVA/>,
          title: "Java"
        },
        {
          Image: <Spring/>,
          title: "Spring Boot"
        },
        {
          Image: <Php />,
          title: "PHP"
        },
        {
          Image: <Laravel/>,
          title: "Laravel"
        }
       
       
      ]
    },
    {
      id: 2,
      title: 'Front End',
      langage: [
        {
          Image: <HTML />,
          title: "HTML"
        },
       {
        Image: <CSS/>,
        title: "CSS"
       },
       {
        Image: <JS/>,
        title: "JavaScript"
       },
       {
        Image: <Angular/>,
        title: "Angular"
       },
       {
        Image: <Tailwind/>,
        title: "Tailwind"
       },
       {
        Image: <Bootstrap/>,
        title: "BootStrap"
       }
      ]
    },
    {
      id: 3,
      title: 'Gestion | Maquettage | Conception',
      langage: [
        {
          Image: <Jira />,
          title: "Jira"
        },
        {
          Image: <Trello />,
          title: "Trello"
        },
        {
          Image: <Git />,
          title: "Git/Github"
        },
        {
          Image: <Figma/>,
          title: "Figma"
        }
      ]
    },
    {
      id: 4,
      title: 'Autre outils',
      langage: [
        {
          Image: <Docker />,
          title: "Docker"
        },
        {
          Image: <Postman/>,
          title: "Postman"
        },
        {
          Image: <Intellij/>,
          title: "Intellij"
        }
      
      ]
  }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
            <div className="h-1 w-10 bg-blue-400 rounded"></div>
            <div className="h-1 w-5 bg-blue-300 rounded"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Les technologies et outils avec lesquels j'ai travaillé
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r px-6 py-4">
                <h3 className="text-2xl font-bold text-center">
                  {skill.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skill.langage.map((lang, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          {lang.Image}
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                          {lang.title}
                        </span>
                      </div>
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;