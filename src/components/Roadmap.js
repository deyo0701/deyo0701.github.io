import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="roadmap" className="roadmap">
        <div className="container">
          <div className="heading">
            <h2 data-aos="fade-up">Roadmap</h2>
          </div>
          <div className="grid">
            <div className="listing">
              {roadmap.map((ite, ind) => {
                return (
                  <div className="item">
                    <div className="top">Stage {ite.id}</div>
                    <div className="main">
                      <ul>
                        {ite.points.map((item, i) => {
                          return <li>{item} </li>;
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
