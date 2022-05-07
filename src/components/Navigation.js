import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Navigation = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);

  function mobilenav() {
    if (window.innerWidth > 991) {
      return "greater";
    }
  }
  mobilenav();
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
      setNavToggler(false);
    }
  });

  const listHandler = (li) => {
    if (li === "Home") {
      window.scroll(0, 0);
    }
    setNavToggler(false);
  };
  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }
  return (
    <>
      <header
        style={
          navColor
            ? {
                background: "#000000eb",
                backdropFilter: " blur(20px)",
              }
            : {}
        }
        className={navToggler ? "nav__active" : ""}
      >
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <a href="">
                  {" "}
                  <h2>DICKSONS EMPIRE</h2>
                </a>
              </div>
              <nav>
                <ul className={navToggler ? "ul__active" : ""}>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind} onClick={() => listHandler(ite.name)}>
                        <a
                          style={navColor ? { textShadow: "none" } : {}}
                          href={ite.path}
                          target="_blank"
                        >
                          {ite.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="nav__btns">
                <a
                  href="
https://twitter.com/DicksonsEmpire?t=AA2I5ApWAM6tfckX7tQwEw&s=09"
                  target="_blank"
                >
                  {" "}
                  <AiOutlineTwitter />
                </a>
                <a
                  href="https://instagram.com/the_dicksons_empire?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
                <i
                  onClick={() => barBtn()}
                  className={
                    !navToggler ? "fa fa-2x fa-bars" : "fa fa-2x fa-times"
                  }
                ></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <i className="fa fa-chevron-up"></i>
      </div>
    </>
  );
};

export default Navigation;
