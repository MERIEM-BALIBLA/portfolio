import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/Footer";
import Formation from "./components/formation/Formation";
import Header from "./components/Nav"
import Profile from "./components/profile/Profile";
import Project from "./components/project/Project";
import Skils from "./components/skills/Skils";
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


     

    </div>
  );
}

export default App;
 