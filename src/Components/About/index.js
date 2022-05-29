import React from "react";
import profilePic from "../../assets/images/bilalersoy.jpeg";
import "./style.css";

function About(props) {
  return (
    <>
      <section id="header-img">
        <h2>Let's See What We Can Accomplish Together!</h2>
      </section>

      <section id="about">
        <div className="about-pic">
          <h2 id="about-title">About Me</h2>
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
        </div>
        <div class="column"></div>
        <div class="main-section-content">
          <p class="about-p">
            Diligent software engineer and social media specialist with 4+ years
            experience with a passion for developing innovative programs that
            expedite the efficiency and effectiveness of organizational success.
            Well-versed in marketing and writing code to create systems that are
            reliable and user-friendly. Integrating high level technologies
            suited for social media platforms..
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
