const formations = [
    {
        id: 1,
        title:'EST Safi',
        description: 'Diplome universitaire de technologie en génie industriel et maintenance option Electromécanique à EST de SAFI',
        date: '2018 2021',
        image: '/assets/images/EST.png',
        lieu:"SAFI"
      },
    {
      id: 1,
      title:'EST Safi',
      description: 'Licence professionnelle en mécatronique à EST de SAFI',
      date: '2022-2023',
      image: '/assets/images/EST.png',
      lieu:"SAFI"
    },
      {
        id: 1,
        title:'UM6P / Youcode Youssoufia ',
        description: 'Deuxieme année Developpement JAVA',
        date: '2023- En cours ',
        image: '/assets/images/Youcode.jpg',
        lieu:"Youssoufia"
      }
]

export default function Formation(){
    return(
        <div className="container mx-auto p-4 h-screen mt-18">
            {/* <div className="flex flex-col justify-center items-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Mes formations</h2>
                <div className="w-full flex justify-center mt-1">
                <div className="bg-gray-800 h-1 w-1/5 mt-1"></div>
                <div className="bg-gray-200 h-1 w-1/5 mt-1"></div>
                </div>
                <p className="mt-2 md:mt-2 text-xl lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">Les technologies et outils avec lesquels j'ai travaillé</p>
            </div> */}
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Mes formations
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
          
            
            <div className="md:px-32 lg:px-12">
            <ol class="relative border-s border-gray-600 dark:border-gray-700">   
            {formations.map((formation) => (

                <li class="mb-10 ms-8 md:mb-12 md:px-32 animate-fade-right animate-once">
                    <div className="absolute left-2 hidden md:block font-mono text-sm font-bold"><p>{formation.date}</p></div>
                    <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    
                    <div
                        class="group flex flex-col justify-start items-start gap-2 w-full  duration-500 relative rounded-lg p-4 bg-white hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
                        >
                        <div
                            class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/6 h-1/2 rounded-lg bg-gray-200 hidden md:block"
                            alt="image here" >
                            <img src={formation.image} className="h-full w-full"/>
                        </div>

                        <div class="">
                            <h2 class="text-2xl font-bold mb-2 text-gray-800 ">{formation.title}</h2>
                            <span className="font-mono text-sm font-bold"><span className="block md:hidden">{formation.date} |</span> {formation.lieu}</span>
                            <p class="text-sm font-semibold text-gray-600">
                            {formation.description}
                            </p>
                        </div>
                    
                    </div>
                </li>
))}

              
            </ol>
            </div>


  
        </div>
    )
}