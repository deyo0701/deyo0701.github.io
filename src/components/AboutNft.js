import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";
const AboutNft = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div className="img">
              <figure>
                <img src="/images/nft/1.png" alt="" />
              </figure>
            </div>
            <div className="details">
              <div>
                <h2 data-aos="fade-up">
                  <span
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    About
                  </span>
                  <br />
                  Dicksons Empire!
                </h2>
              </div>
              <p data-aos="fade-right" data-aos-duration="600">
                We are Dicksons from Dicksons Empire The Dickson Empire is
                collection of unique digital Collectibles of Common and uncommon
                dick personalities that we meet in day to day life.Every Dickson
                owner will get membership card that doubles the value of the nft
                and grants acces to members-only benefits.Which Dickson are you?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
