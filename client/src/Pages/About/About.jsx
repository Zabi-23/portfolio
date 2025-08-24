// src/Pages/About/About.jsx

import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  const jumpAnimation = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', stiffness: 300, damping: 10 },
  };

  return (
    <motion.div {...jumpAnimation}>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="/image/profile2.jpg" alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hi! My name is Zabi Sideqi, and I’m a newly graduated full-stack developer 
              from Chas Academy (2023–2025). I enjoy building responsive, user-friendly web
              applications and love taking features all the way from concept to production. 
              During my internship at TechNspire AB (Zimplex AI), I gained hands-on experience by
              developing a Next.js website, building an AI-powered class dashboard (React, Node.js, MongoDB),
              integrating Microsoft 365 (Teams /Outlook), and containerizing services with Docker. 
              I collaborated in a Scrum team, which strengthened my skills in agile development and teamwork.  
            </p>
            <p>
              Through my studies, I built a solid foundation in both frontend and backend development, 
              focusing on React/Next.js, TypeScript/JavaScript, Node.js/Express, REST APIs, PostgreSQL, 
              and MongoDB. I’ve also worked with Docker, CI/CD pipelines, and had introductory exposure 
              to cloud platforms like AWS and Azure DevOps. my studies, I’ve gained a solid foundation in both
              
            </p>
            <p>
              Before becoming a developer, I worked as a mathematics teacher, which helped me develop
              strong problem-solving, communication, and collaboration skills — qualities I now apply in software 
              development. My goal is to contribute to a team where I can grow as a developer and create solutions that truly make a difference.
              make a real difference.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

