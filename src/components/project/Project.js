import React, { useState } from 'react';
import Citronix from "../../assets/images/citronix.webp"
import Hunter from "../../assets/images/huntersLeague.webp"
import BatiCuisine from "../../assets/images/batiCuisine.webp"
import SoftVital from "../../assets/images/softVital.png"
import Evento from "../../assets/images/evento.webp"
import SkillDer from "../../assets/images/skillder.webp"

const projects = [
    {
      id: 1,
      image:Citronix,
      title: 'Citronix',
      description:'Une application web de gestion agricole qui optimise le suivi des productions de citrons, permettant aux fermiers de maximiser leur rendement et leur productivité.',
      langage: 'JAVA | Spring Boot | ',
      href:"https://github.com/MERIEM-BALIBLA/Citronix.git"
    },
    {
      id: 1,
      image:Hunter,
      title: 'Hunters League ',
      description:'Une application web de gestion agricole qui optimise le suivi des productions de citrons, permettant aux fermiers de maximiser leur rendement et leur productivité.',
      langage: 'JAVA | Spring Boot | ',
      href:"https://github.com/MERIEM-BALIBLA/hunter-s-League.git"

    },
    {
      id: 1,
      image:BatiCuisine,
      title: 'BatiCuisine',
      description:'Une application web de gestion agricole qui optimise le suivi des productions de citrons, permettant aux fermiers de maximiser leur rendement et leur productivité.',
      langage: 'JAVA | Spring Boot | ',
      href:"https://github.com/MERIEM-BALIBLA/BatiCuisine.git"

    },
  
    {
      id: 1,
      image:SoftVital,
      title: 'SoftVital',
      description:'Une application web de gestion agricole qui optimise le suivi des productions de citrons, permettant aux fermiers de maximiser leur rendement et leur productivité.',
      langage: 'JAVA | Spring Boot | ',
      href:"https://github.com/MERIEM-BALIBLA/SoftVital.git"

    },
    {
      id: 1,
      image:Evento,
      title: 'Evento',
      description:'Une application web de gestion agricole qui optimise le suivi des productions de citrons, permettant aux fermiers de maximiser leur rendement et leur productivité.',
      langage: 'JAVA | Spring Boot | ',
      href:"https://github.com/MERIEM-BALIBLA/EvenTo_gestionnaire_des_Evenements-.git"

    },
    {
      id: 1,
      image:SkillDer,
      title: 'SkillDer',
      description:'Une application web de gestion agricole qui optimise le suivi des productions de citrons, permettant aux fermiers de maximiser leur rendement et leur productivité.',
      langage: 'JAVA | Spring Boot | ',
      href:"https://github.com/MERIEM-BALIBLA/Skillder-gestionnaire-des-Evenements-Dynamic.git"

    },
    
]


export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.getElementById("project_modal").showModal();
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.getElementById("project_modal").close();
  };

  const Image ="" ;
  return (
    <div className="container mx-auto mt-16">
       <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
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
      {/* <div className="flex flex-col justify-center items-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Mes Projets</h2>
        <div className="w-full flex justify-center mt-1">
          <div className="bg-gray-800 h-1 w-1/5 mt-1"></div>
          <div className="bg-gray-200 h-1 w-1/5 mt-1"></div>
        </div>
        <p className="mt-2 text-xl text-center text-gray-700 font-light leading-relaxed">
          Les technologies et outils avec lesquels j'ai travaillé
        </p>
      </div> */}

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            onClick={() => openModal(project)}
            key={index}
            className="bg-base-100 shadow-md rounded-lg overflow-hidden animate-flip-down cursor-pointer"
          >
            <figure>
              <div className="relative w-full h-56">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  alt={project.title}
                />
              </div>
            </figure>
            <div className="p-4">
              <h2 className="font-bold text-lg flex items-center justify-between">
                {project.title}
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </h2>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              <p className="text-gray-800 text-sm font-medium">{project.langage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog id="project_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {selectedProject && (
            <>
              <h3 className="font-bold text-lg">{selectedProject.title}</h3>
              <p className="py-4">{selectedProject.description}</p>
              <p className="text-gray-800 text-sm font-medium">{selectedProject.langage}</p>
            </>
          )}
          <div className="modal-action">
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

