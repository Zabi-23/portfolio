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
              Hello! My name is Zabi Sideqi, and I’m a dedicated and ambitious
              student currently studying to become a full-stack developer at
              CHAS Academy (2023-2025). I’m passionate about creating
              innovative, user-friendly web solutions, and I’m currently looking
              for an internship (LIA) where I can apply my skills in a
              professional environment and contribute with my technical
              expertise.
            </p>
            <p>
              Through my studies, I’ve gained a solid foundation in both
              frontend and backend development, focusing on tools like HTML,
              CSS, JavaScript, TypeScript, and React.js. I’ve also started
              delving into backend and API development, which has provided me
              with a well-rounded understanding of the entire development
              process.
            </p>
            <p>
              Previously, I worked as a teacher in a preparatory group, where I
              was responsible for planning and conducting lessons. This
              experience helped me develop strong communication skills and
              effective teamwork abilities, qualities I believe are essential in
              web development as well. My goal is to contribute to a team where
              I can continue to grow professionally and create solutions that
              make a real difference.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

