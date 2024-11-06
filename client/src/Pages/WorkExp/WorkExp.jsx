
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
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="2018 - 2023"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              FBG-Lärare 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Slottskolan
            </h4>
            <p>
              Planerade och genomförde undervisning i matematik, samhällskunskap.
              Använde en varierad pedagogik för att nå alla elever och anpassade 
              undervisningen till deras individuella behov.
              Bedömde elevernas lärande på ett rättvist och konstruktivt sätt.
              Samarbetade med kollegor och andra professionella för att skapa en 
              positiv och samarbetsvillig arbetsmiljö.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#1e1e2c" }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="2015 - 2017"
            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Personal på Fenix och Pegasus (HVB)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vingåker-kommun
            </h4>
            <p>
              Personal på Fenix och Pegasus (HVB) ungdomsboende
              Ansvarig för att skapa en trygg och positiv miljö för ungdomar.
              Planerade och genomförde aktiviteter som främjade social samvaro och personlig
              utveckling. Stödde ungdomarna i deras vardag och utmaningar. Samarbetade  
              med deras familjer och andra relevanta aktörer.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;

