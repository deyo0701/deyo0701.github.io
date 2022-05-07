import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/collection.scss";
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
import { Nfts } from "../assests/data";
import { IndeterminateCheckBoxTwoTone } from "@material-ui/icons";
const Collection = () => {
  const [item, setItem] = useState(4);
  const [padding, setPadding] = useState(40);
  function sliderResponsive() {
    if (window.innerWidth > 1000) {
      setItem(4);
    }
    if (window.innerWidth < 1000) {
      setItem(4);
    }
    if (window.innerWidth < 780) {
      setItem(3);
      setPadding(30);
    }
    if (window.innerWidth < 520) {
      setItem(2);
      setPadding(20);
    }
    if (window.innerWidth < 400) {
      setItem(1);
      setPadding(20);
    }
  }
  useEffect(() => {
    sliderResponsive();
  }, [item]);
  window.addEventListener("resize", () => {});
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="collection" className="collection">
        <div className="container">
          <div className="heading">
            <h1 data-aos="fade-up">The NFT's</h1>
          </div>
          <div className="collection__grid">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={20}
              items={item}
              stagePadding={padding}
              nav={false}
              autoplay={true}
              //   center={true}
              autoplaySpeed={5000}
              autoplayTimeout={3000}
              autoplayHoverPause
              //   rtlClass={}
              dots={false}
            >
              {Nfts.map((nft, i) => {
                return (
                  <div key={i} className="item">
                    <a
                      href="https://opensea.io/The_Dicksons_Empire
"
                      target="_blank"
                    >
                      <div className="nft__item">
                        <div className="img">
                          <img src={nft} alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
          <div className="btn">
            <a href="https://opensea.io/The_Dicksons_Empire" target="_blank">
              <button>View Collection!</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
