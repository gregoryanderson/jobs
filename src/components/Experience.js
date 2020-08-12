import React, { useState } from "react";

const Experience = (props) => {
  const [teach, setTeach] = useState(false);
  const [soldier, setSoldier] = useState(false);
  const [chief, setChief] = useState(false);
  const [dev, setDev] = useState(false);

  const handleClick = (name) => {
    if (name === "teach") {
      setTeach(true);
      setSoldier(false);
      setChief(false);
      setDev(false);
    }  else if (name === "soldier") {
      setTeach(false);
      setSoldier(true);
      setChief(false);
      setDev(false);
    } else if (name === "chief") {
      setTeach(false);
      setSoldier(false);
      setChief(true);
      setDev(false);
    } else if (name === "dev") {
      setTeach(false);
      setChief(false);
      setSoldier(false);
      setDev(true);
    } else {
      setTeach(false);
      setChief(false);
      setSoldier(false);
      setDev(false);
    }
  };

  const determineText = () => {
    if (teach) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Preschool Teacher</h1>
            <p className="job-p">
              Working in a preschool was a fascinating experience with an
              incredible amount of good humor. It gave me the chance to be in an
              workplace where the numbers heavily favor the opposite sex. This
              has made inclusion an important exercise of mine. Finally, it was
              my first time practicing selflessness. Helping others find their
              voices and agency is rewarded with laughter every single day.{" "}
            </p>
            <p>
              Conventions that I have taken from that time relate to how
              important compassion is within a business model. Our product was
              the developmental growth of children. Our clients were parents who
              cared very deeply about those children. Working with them to
              ensure that goals were met included having difficult
              conversations, and if those conversations displayed patience and
              understanding, success was ultimately found.
            </p>
          </section>
        </>
      );
    } else if (soldier) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Soldier</h1>
            <p className="job-p">
              My first year in the army was spent in an intensive course
              learning Arabic. Over the course of 15 months, I mastered the
              Arabic language to the level of a college freshman. To this day,
              learning a second language is one of my proudest achievements. An
              immediate connection is made whenever I speak to someone in their
              language rather than force them to speak my own.
            </p>
            <p className="job-p">
              The rest of my time in the military was spent between mission and
              the field. My biggest takeaway is how a team must work together in
              order to accomplish a objective. More often than not, one team
              member sacrifices in order for a team to achieve their goal. These
              endurances usually go unacknowledged and a disproportionate amount
              of credit flows in the direction of someone else. A new project
              will come along and with that comes more responsibility and
              credit. Each member must divide the shares appropriately in order
              for the team to travel the furthest distance, and for the longest
              time.{" "}
            </p>
          </section>
        </>
      );
    } else if (chief) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Branch Chief</h1>
            <p className="job-p">
              As a Data Analyst, I managed the Microsoft Access database for the
              foreign military target of our mission. I also worked with
              developers building applications for out mission and supervised
              operations for top secret missions.
            </p>
            <p className="job-p">
              I was promoted twice in 18 months. My daily routine went from from
              live Arabic translation and SQL queries to leading daily standup
              meetings and conducting performance reviews, while upholding my
              analytical duties. New intelligence from across the world needed
              to be collected, analyzed, translated, reported, briefed, and
              disseminated properly in as little as ten minutes.
            </p>
          </section>
        </>
      );
    } else if (dev) {
      return (
        <>
          <section className="projects--story">
            <h1 className="job-title">Software Developer</h1>
            <p className="job-p">
              I spent time at Turing School of Software and Design where I
              focused on JavaScript, primarily with a focus on React/Redux
              architecture. Within my work competencies within jQuery,
              HTML/CSS/SCSS, frontend testing libraries, Heroku, TravisCI, Vue,
              and Git were acquired. I then focused on the backend with Ruby and
              Rails. This has enhanced my understanding of SQL, ActiveRecord,
              RSpec, Postgres, Material-UI, and development on the whole.
            </p>
            <p className="job-p">
              At Nanno, we were creating a new PWA, built in React, that
              separates from an already existing Rails monolith. I built new
              features on the app, handling frontend and backend tickets along
              the way. We worked within an Agile Workflow and my velocity
              improved rapidly. We used Jira to handle tickets and Github for
              our repos.
            </p>
          </section>
        </>
      );
    } else {
      return (
        <section>
          <img
            src={require("./GREG-01.png")}
            alt="Gregory Anderson"
            className="projects--img"
          />
        </section>
      );
    }
  };

  return (
    <section className="main--content">
      <section className="contact--buttons">
        <section className="projects--btns">
          <button
            className={teach ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("teach")}
          >
            Preschool Teacher
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={soldier ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("soldier")}
          >
            Soldier
          </button>
        </section>
        <section className="projects--btns">
          <button
            className={chief ? "projects__button--true" : "projects__button"}
            onClick={() => handleClick("chief")}
          >
            Data Analyst
          </button>
        </section>
      </section>
      <section className="projects--btns">
        <button
          className={dev ? "projects__button--true" : "projects__button"}
          onClick={() => handleClick("dev")}
        >
          Software Developer
        </button>
      </section>
      <section className="contact--text">{determineText()}</section>
    </section>
  );
};

export default Experience;
