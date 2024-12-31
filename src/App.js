import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer";
import Formation from "./components/formation/Formation";
import Header from "./components/Nav"
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import Skils from "./components/skills/Skils";
import './css/style.css';
function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <div className="bg-zinc-200 relative ">
     <Header/>
      <div className="md:px-14">
      <Profile/>
      <Skils/>
      <Project/>
      <Experience/>
      <Formation/>
      <Contact/>
      </div>
      <Footer/>

{/* <div class="social-button fixed bottom-4 left-4 z-50">
  
  <button class="relative w-12 h-12 rounded-full group" onClick={handleScrollToTop}>
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
      >
        <svg
          height="32"
          width="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="group-hover:fill-[#171543] fill-white duration-300"
            d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </button>
</div> */}
     

    </div>
  );
}

export default App;
 