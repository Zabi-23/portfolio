
//src/Pages/Projects/Projects.jsx

import './Project.css';
import { motion } from "framer-motion";

const Projects = () => {
 
  const spinTransition = {
    hidden: { rotate: 0 },
    visible: { rotate: 360 },
    transition: { duration: 1, ease: "linear" },
  };

  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        As a dedicated full-stack developer student, I focus on building 
        robust and user-friendly applications. My work integrates modern
         JavaScript frameworks with backend services and database technologies.
          Check out my projects that showcase my ability to create responsive 
          frontend interfaces paired with efficient backend systems.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <motion.div initial="hidden" animate="visible" variants={spinTransition}>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Techinfoyt Shopping Website</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Zabi-23/IMS.git"
                     target="_blank"
                      rel="noopener noreferrer"
                     >
                      View
                     </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="/image/backend.jpeg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Nodejs</span>
                  <span className="card-detail-badge">Express</span> 
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Backend TRULLO</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Zabi-23/TRELLO.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">AI-study</span>
                  <img
                   src="/image/ai-study.jpeg"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                 
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">MongoDB</span><br></br>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">TypeScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">AI-StudyBuddy</h5>
                  </div>
                  <a className="ad-btn" 
                  href="https://github.com/Zabi-23/AI-StudyBuddy.git"
                  target="_blank"
                  rel="noopener noreferrer">
                    View
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;


