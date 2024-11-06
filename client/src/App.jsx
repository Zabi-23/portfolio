
//src/App.jsx

import { motion } from "framer-motion"; // Importera från framer-motion
import Layout from './components/Layout/Layout';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Education from './Pages/Educations/Education';
import Projects from "./Pages/Projects/Projects";
import Techstack from './Pages/Techstack/Techstack';
import WorkExp from './Pages/WorkExp/WorkExp';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();

  return (
    <div id={theme}>
      <ToastContainer />
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      <div className="footer pb-3 ms-3">
        <motion.h4
          className="text-center"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],  // Pulsar med zoom in och ut
            rotate: [0, 10, -10, 10, 0],  // Små rotationer för en "tada"-effekt
          }}
          transition={{
            duration: 0.8,        // Justerar hur lång tid animeringen tar
            repeat: Infinity,     // Upprepas oändligt
            repeatType: "mirror"  // Återgår till ursprungligt läge efter varje repetering
          }}
        >
        
        </motion.h4>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </div>
  );
}

export default App;
