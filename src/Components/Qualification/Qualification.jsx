import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i class="uil uil-graduation-cap qualification__icon"></i>
              {""}
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }

              onClick={() => toggleTab(2)}
            >
              <i class="uil uil-briefcase-alt qualification__icon"></i>
              {""}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div className={toggleState === 1 ? 
            "qualification__content qualification__content-active" : 
            "qualification__content "}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Full-stack development
                  </h3>
                  <span className="qualification__subtitle">Websoftera.</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>Oct 2021 - Jan 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    BTech
                  </h3>
                  <span className="qualification__subtitle">Arvind gavali college of engineering satara.</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2019 - 2022
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Diploma in Computer Engineering</h3>
                  <span className="qualification__subtitle">
                    Gaurishankar poly. limb,Satara.
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2016 - 2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    HSC
                  </h3>
                  <span className="qualification__subtitle">Ycis Satara.</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2015 - 2016
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SSC</h3>
                  <span className="qualification__subtitle">
                    Dnyan Uday vidyamandir,
                    <br />krishnanagar, khed,Satara.
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> 2013 - 2014
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>
              </div>

            </div>

            <div className={toggleState === 2 ? 
            "qualification__content qualification__content-active" : 
            "qualification__content "}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Fullstack developer intern</h3>
                  <span className="qualification__subtitle">
                    Websoftera techonologies.
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-schedule"></i> oct 2021 - May 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    internship in c programming
                  </h3>
                  <span className="qualification__subtitle">Usas Solution.</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i> Dec 2019 - Jan 2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Java developer intern</h3>
                  <span className="qualification__subtitle">
                    Mythos Techonolohy Satara.
                  </span>
                  <div className="qualification__calender">
                    <i class="uil uil-schedule"></i> Nov 2018 - Feb 2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualifiaction__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                  internship in python programming 
                  </h3>
                  <span className="qualification__subtitle">Mythos Techonology Satara.</span>
                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt"></i>Dec 2017 - Feb 2018
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
