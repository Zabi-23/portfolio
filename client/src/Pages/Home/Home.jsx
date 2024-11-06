

import { useTheme } from "../../context/ThemeContext"; 
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import './Home.css';
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <motion.h2
            initial={{ opacity: 0, x: -100 }} // Animerad från vänster
            animate={{ opacity: 1, x: 0 }}    // Sluta i mitten
            exit={{ opacity: 0, x: 100 }}      // Animerad till höger vid borttagning
            transition={{ duration: 0.5 }}      // Tidsinställning för övergång
          >
            Hi 👋 I&apos;m a
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}           // Animerad från osynlig
            animate={{ opacity: 1 }}           // Sluta synlig
            transition={{ duration: 1 }}        // Tidsinställning för övergång
          >
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 20 }}     // Animerad från botten
            animate={{ opacity: 1, y: 0 }}      // Sluta i mitten
            exit={{ opacity: 0, y: 20 }}         // Animerad till botten vid borttagning
            transition={{ duration: 0.5 }}        // Tidsinställning för övergång
          >
            <a
              className="btn btn-hire"
              href="#contact"  // Använder anchor link för att scrolla ner till kontaktsidan
                >
                Hire Me
               </a>

            <a
              className="btn btn-cv"
              href="/image/Resume.pdf" 
              target="_blank"
              rel="noreferrer"
              //download="Resume.pdf" 
            >
              My Resume
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;

