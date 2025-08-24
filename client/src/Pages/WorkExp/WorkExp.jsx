
// src/Pages/WorkExp/WorkExp.jsx
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />

        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jan 2025 – Present"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TechNspire AB (Zimplex AI)
            </h4>
            <ul>
              <li>Developed and launched a responsive website using Next.js and Tailwind CSS.</li>
              <li>Built an AI-powered class dashboard with React, Node.js, and MongoDB.</li>
              <li>Integrated Microsoft 365 (Teams & Outlook) into a school platform.</li>
              <li>Implemented REST APIs and containerized services with Docker.</li>
              <li>Collaborated in a Scrum team: sprint planning, code reviews, and daily standups.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2018 - 2023"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">Mathematics Teacher</h3>
            <h4 className="vertical-timeline-element-subtitle">Slottskolan</h4>
            <p>
              Planned and conducted lessons in mathematics and social studies.
              Used a varied teaching approach to meet the needs of all students and tailored lessons to their individual requirements.
              Assessed students progress in a fair and constructive way.
              Collaborated with colleagues and other professionals to create a positive and cooperative work environment.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2015 - 2017"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">Youth Program Coordinator</h3>
            <h4 className="vertical-timeline-element-subtitle">Vingåker Municipality</h4>
            <p>
              Coordinated activities for youth at Fenix and Pegasus (HVB) residential centers.
              Created engaging programs that fostered personal development and social skills.
              Provided day-to-day support and mentorship, helping young residents navigate their challenges.
              Collaborated with families and relevant stakeholders to ensure a supportive environment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;
