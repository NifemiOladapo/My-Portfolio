import React, { useEffect } from "react";
import "../styles/Skill.css";

function Skills() {
  return (
    <div className="skill">
      <div>
        <div className="skillCard">
          <h5>
            <span>01</span>
            Web Developer
          </h5>
          <p>
            I am a positive enthusiastic and competent web developer who, over
            the years, has built up a diverse range of skills, qualities and
            attributes that guarantee i will perform highly in this role. I am a
            MERN stack developer who has built functionall, robust, and scalable
            web applications over the years. I am full stack developer but
            Backend heavy.
          </p>
        </div>

        <div className="skillCard">
          <h5>
            <span>02</span>
            Database Administrator
          </h5>
          <p>
            Establish the needs of users and monitor user access and security,
            monitor performance and manage parameters in order to provide fast
            responses to front-end users, map out the conceptual design for a
            planned database, carry out capacity planning and lots more. I make
            use of MongoDb for my database management.
          </p>
        </div>
      </div>
      <div>
        <div className="skillCard">
          <h5>
            <span>03</span>
            Software Developer
          </h5>
          <p>
            Experienced software developer with over a year experience as a
            freelance software engineer, i've contributed to over a dozen
            projects and assisted with managing one project for one of the
            firm's long time client.
          </p>
        </div>
        <div className="skillCard">
          <h5>
            <span>04</span>
            Backend Developer
          </h5>
          <p>
            experienced with sever side web application logic and integration of
            the work frontend, writes competent services and APIs used by front
            end web developers and mobile applications. vast in backend
            technologies like NodeJs, ExpressJs, MongoDb.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
