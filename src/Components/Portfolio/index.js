import React from "react";
import Project from "../Project";
import "./style.css";

function Portfolio(props) {
  const workArr = [
    {
      url: "http://www.publant.com/",
      title: "Publant",
      github: "",
      class: "big-box-1",
      id: null,
    },
    {
      url: "http://www.friskycigars.com/",
      title: "Frisky Cigars",
      github: "",
      class: "big-box-2",
      id: null,
    },
    {
      url: "http://cabinetera.com/",
      title: "Cabinetera",
      github: "",
      class: "half-box",
      id: "half-box1",
    },
    {
      url: "http://kitchenerp.com/",
      title: "Kitchen erp",
      github: "",
      class: "half-box",
      id: "half-box2",
    },
  ];

  return (
    <>
      <section
        className="d-flex justify-content-center"
        id="header-img-partial"
      ></section>
      <h2 className="d-flex justify-content-center" id="work-title">
        Portfolio
      </h2>
      <section id="work">
        <div class="column"></div>
        <div id="work-imgs-container" class="main-section-content">
          {workArr.map((work) => {
            return <Project work={work} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
