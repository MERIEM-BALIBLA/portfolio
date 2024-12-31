const experiences =[
    {
        entreprise:'DeepLeaf | UM6P',
        description: 'Stage de deux mois au sein de l’entreprise DeepLeaf Ben-Guerire',
        date: '2018 2021',
        image: '/assets/images/DeepLeaf.jpg',
        lieu:"Ben Guerire",
        taches :[
            {
                description : "Développement de la partie front-end d'une application mobile"
            },
            {
                description : "Conception et implémentation d'une fonctionnalité de caméra d'analyse permettant de scanner et d'analyser des objets via l'application mobile."
            },
        ]
    },
    {
        entreprise:'OCP unité de Calicnation',
        description: 'Stage d’observation de deux mois au sein de l’entreprise OCP Youssoufia',
        date: '2018 2021',
        image: '/assets/images/CALCINATION.webp',
        lieu:"Youssoufia",
        taches :[
            {
                description : "l’Etude de la fiabilisation de l’électrofiltre"
            },
        ]
    },
    {
        entreprise:'Pelux',
        description: ' Stage d’un mois au sein de l’entreprise PELUX ',
        date: '2018 2021',
        image: '/assets/images/PELUX.jpg',
        lieu:"Youssoufia",
        taches :[
            {
                description : "l’Etude de la boite médicale "
            },
            {
                description : "Conception de la boite médicale"
            },
            {
                description : "Montage de la boite médicale"
            },
            {
                description : " La programmation de la boite médicale"
            },
        ]
    },
    {
        entreprise:'CyberLeet | UM6P',
        description: 'Stage de deux mois au sein de l’entreprise CyberLeet Ben-Guerire',
        date: '2019 - 2020',
        image: '/assets/images/CyberLeet.jpg',
        lieu:"Ben Guerire",
        taches :[
            {
                description : "l’Etude du comparateur de l’eau"
            },
            {
                description : "Conception du compteur"
            },
        ]
    },
    {
        entreprise:'OCP unité centrale',
        description: 'Stage d’observation d’un mois au sein de l’entreprise OCP Youssoufia ',
        date: ' 2018 - 2019',
        image: '/assets/images/OCP.jpg',
        lieu:"Youssoufia"
    }
]
export default function Experience(){
    return(
        <div className=" p-4 h-screen mt-16">
        
        
        {/* <div className="flex flex-col justify-center items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Mes Experiences Professionnelle</h2>
            <div className="w-full flex justify-center mt-1">
              <div className="bg-gray-800 h-1 w-1/5 mt-1"></div>
              <div className="bg-gray-200 h-1 w-1/5 mt-1"></div>
            </div>
            <p className="mt-2 md:mt-2 text-xl lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">Les technologies et outils avec lesquels j'ai travaillé</p>
        </div> */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Experiences
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

        <div id="default-carousel" className="relative w-full " data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {experiences.map((exp, index) => (
                    <div 
                        key={index}
                        className="hidden duration-700 ease-in-out" 
                        data-carousel-item
                    >
            
            <div
            className="hero h-full"
            style={{
                backgroundImage: `url(${exp.image})`,
                backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content text-left w-full flex justify-start items-start md:p-16 h-full ">
                    <div className="w-full md:flex-row md:px-20 md:justify-between flex flex-col h-full">
                            <div className="md:w-1/2 md:flex md:flex-col md:justify-between h-full">
                                <div>
                                    <h2 class="md:text-4xl text-xl font-bold ">
                                        {exp.entreprise}</h2>
                                </div>
                                <div>
                                    <span className="font-mono md:text-2xl text-sm font-bold">{exp.date} | {exp.lieu}</span>
                                    <p class="md:text-xl text-xs font-semibold text-gray-300">
                                    {exp.description}
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/3">
                                <ol>
                                    {Array.isArray(exp.taches) && exp.taches.length > 0 && (
                                        <>
                                            <p className="md:text-3xl text-sm md:mb-2 font-medium">Taches efféctuées</p>
                                            <ul className="text-xs md:text-xl md:mb-2">
                                                {exp.taches.map((tache, index) => (
                                                    <li key={index}>
                                                        {tache.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </ol>
                            </div> 
                    </div>
                </div>
            </div>

                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {experiences.map((_, index) => (
                    <button 
                        key={index}
                        type="button" 
                        className="w-3 h-3 rounded-full"
                        aria-current={index === 0}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                    ></button>
                ))}
            </div>

            {/* Slider controls */}
            <button 
                type="button" 
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg 
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 6 10"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            
            <button 
                type="button" 
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg 
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 6 10"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>



    </div>    )
}