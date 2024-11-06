

//src/Pages/Home/Techstack/Techstack.jsx

import "./Techstack.css";
import { TechstackList } from '../../utils/TechstackList';
import { motion } from "framer-motion";

const Techstack = () => {
  return (
    <div className="container techstack" id="techstack">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 including programming Languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
      </motion.div>
      
      <div className="row">
        {TechstackList.map((tech, index) => (
          <motion.div
            key={tech._id || index}
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }}    
            exit={{ opacity: 0, x: 100 }}      
            transition={{ duration: 0.5 }}     
            className="col-md-3"
          >
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;


