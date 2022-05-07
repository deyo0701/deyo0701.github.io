import React from "react";
import "../scss/footer.scss";

import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="icons">
            <div className="item">
              <a
                href="https://instagram.com/the_dicksons_empire?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="item">
              <a
                href="https://twitter.com/DicksonsEmpire?t=AA2I5ApWAM6tfckX7tQwEw&s=09"
                target="_blank"
              >
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
          <p> ⒸCopyright 2022 - All Rights Are Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
