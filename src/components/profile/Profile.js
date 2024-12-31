// import React, { useState, useEffect } from 'react';

// const TypewriterText = ({ fullText, speed = 100, onComplete }) => {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const handleTyping = () => {
//       if (!isDeleting) {
//         // Typing
//         if (text.length < fullText.length) {
//           setText(fullText.slice(0, text.length + 1));
//         } else {
//           // Finished typing, prepare to delete
//           setTimeout(() => setIsDeleting(true), 1000);
//         }
//       } else {
//         // Deleting
//         if (text.length > 0) {
//           setText(text.slice(0, -1));
//         } else {
//           // Finished deleting, call complete callback
//           onComplete();
//         }
//       }
//     };

//     const typingSpeed = isDeleting ? speed / 2 : speed;
//     const timer = setTimeout(handleTyping, typingSpeed);

//     return () => clearTimeout(timer);
//   }, [text, isDeleting, fullText, speed, onComplete]);

//   return <span>{text}</span>;
// };

// const Profile = () => {
//   const [phase, setPhase] = useState(0);

//   // Define the texts
//   const texts = [
//     " une Développeuse Full Stack, ",
//     " BALIBLA Meriem"  ];

//   const handleTypewriterComplete = () => {
//     setPhase(prevPhase => (prevPhase + 1) % texts.length);
//   };

//   return (
//     <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden animate-fade animate-once">
//       <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
//         <div className="w-full md:w-1/2 lg:px-12">
//           <div className="flex items-center gap-2">
//             <div className="flex-1 h-0.5 bg-gray-300"></div>
//             <span className="text-md font-medium animate-pulse animate-infinite">
//               Développeuse Full Stack
//             </span>
//           </div>
//           <h2 className="text-2xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
//             Bonjour,
//           </h2>
//           <div className='mt-4'>
//             <p className="text-2xl h-10">
//               Je suis 
//              <span className="text-orange-500 text-3xl font-medium">
//              <TypewriterText
//                 key={phase}
//                 fullText={texts[phase]}
//                 speed={100}
//                 onComplete={handleTypewriterComplete}
//               />
//              </span>
//             </p>
//           </div>
//           <p className="mt-8 md:mt-10 text-xl lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
//             Développeur web fullstack passionné, expert en PHP/Laravel et Java/Spring Boot. Concepteur de solutions logicielles robustes et performantes, je crée des applications web évolutives avec une attention particulière à la qualité du code et à la sécurité des données. Mon expertise technique allie innovation technique et souci constant de la maintenabilité.
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start hover:animate-shake">
//             <button className="w-full sm:w-40 px-4 py-2 rounded-full font-semibold text-md bg-blue-500 text-white border-2 border-blue-500 before:ease relative w-40 overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40">
//               <span relative="relative z-10">CV</span>
//             </button>
            

//           </div>
//         </div>

//         <div class="w-full md:w-1/2 flex justify-center md:justify-end hidden md:block">
//              <div className="p-28">
//              <img src="/assets/images/hero.jpeg" className="rounded-lg " />   
//                  </div>   
                   
// //         </div>
//       </div>
      
      
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';

const TypewriterText = ({ fullText, speed = 100, onComplete }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          onComplete();
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText, speed, onComplete]);

  return <span>{text}</span>;
};

const Profile = () => {
  const [phase, setPhase] = useState(0);
  const texts = [
    " Une Développeuse Full Stack",
    " BALIBLA Meriem"
  ];

  const handleTypewriterComplete = () => {
    setPhase(prevPhase => (prevPhase + 1) % texts.length);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        {/* Navigation simple */}

        <div className="flex md:fex-row items-center justify-between  mx-auto">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-gray-900">
                Bonjour,
                {/* Je suis Meriem */}
              </h1>

              <div className="text-2xl text-gray-600">
                <span> Je suis
                  <TypewriterText
                    key={phase}
                    fullText={texts[phase]}
                    speed={100}
                    onComplete={handleTypewriterComplete}
                  />
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Développeuse full stack passionnée par la création d'expériences web innovantes. 
              Spécialisée en PHP/Laravel et Java/Spring Boot avec un fort accent sur 
              l'architecture propre et les performances.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">PHP/Laravel</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Java/Spring</span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Angular</span>
              {/* <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">Vue.js</span> */}
            </div>

            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Voir mes projets
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Me contacter
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6">
              <a href="https://github.com/MERIEM-BALIBLA" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a  href="https://www.linkedin.com/in/meriem-balibla/" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section - Avec effet de survol */}
          <div className="relative group p-12 md:block hidden md:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="assets/images/profile.jpeg" 
                alt="Profile"
                className="w-full aspect-square object-cover"
              />
              {/* Overlay avec texte au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-2xl font-bold">BALIBLA Meriem</p>
                  <p className="text-white/80">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;