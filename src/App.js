import React, { useState, useEffect } from "react";
import "./scss/normalize.css";
import Banner from "./components/Banner";

import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";

import "./scss/reset.css";
import AboutNft from "./components/AboutNft";

import ClipLoader from "react-spinners/ClipLoader";
import Collection from "./components/Collection";

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#e91e63");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div
        style={{
          display: loading ? "grid" : "none",
          placeContent: "center",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          background: "#141414",
          zIndex: "10000",
        }}
      >
        <ClipLoader color={color} loading={loading} size={150} />
      </div>

      <main>
        <Banner />
        <AboutNft />
        <Collection />
        <Roadmap />

        {/* <Teams /> */}
        {/* <Faq /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
