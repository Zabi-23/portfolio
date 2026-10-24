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
            <img src="/image/profile2.jpg" alt="Portrait of Zabi Sideqi" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hi! My name is Zabi Sideqi, and I’m a full-stack developer who
              graduated from Chas Academy (2023–2025). I enjoy building
              responsive, user-friendly web applications and taking features
              from concept to production. During my internship at TechNspire AB
              (Zimplex AI), I developed a Next.js website, contributed to an
              AI-powered class dashboard using React, Node.js and MongoDB,
              integrated Microsoft 365 (Teams and Outlook), and containerized
              services with Docker. I also collaborated in a Scrum team and
              strengthened my skills in agile development and teamwork.
            </p>
            <p>
              Through my studies and projects, I built a foundation in frontend
              and backend development, including React, Next.js,
              TypeScript/JavaScript, Node.js/Express, REST APIs, PostgreSQL and
              MongoDB. I have also worked with Docker and CI/CD pipelines and
              gained introductory experience with AWS and Azure DevOps.
            </p>
            <p>
              Before becoming a developer, I worked as a mathematics teacher.
              That experience strengthened my problem-solving, communication
              and collaboration skills, which I bring to software development.
              I’m looking to contribute to a team where I can continue growing
              as a developer and build useful, reliable solutions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
