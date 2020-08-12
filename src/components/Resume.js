import React from "react";
import "./Main.css";
import "./Projects.css";

const Resume = () => {

  return (
    <section className="main--content">
      <section className="video">
        <iframe
          src={require("./Gregory_Anderson_Resume.pdf")}
          width="560"
          height="315"
        ></iframe>
      </section>
    </section>
  );
};

export default Resume;
