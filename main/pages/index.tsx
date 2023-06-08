import type { NextPage } from "next";
import Typed from "react-typed";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTransition(true);
    }, 5500);
  }, [typeof window]);

  useEffect(() => {
    if (showTransition) {
      setTimeout(() => {
        setShowContent(true);
      }, 660);
    }
  }, [showTransition]);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#1c1c1c",
        zIndex: 400,
        overflowY: showContent ? "scroll" : "hidden",
      }}
    >
      {showContent ? (
        <>
          <div className="gradientbg">
            <div className="firstdiv"></div>
            <div className="canvasholder">
              <canvas className="canvas"></canvas>
            </div>
          </div>
          <Navigation />
          <div className="animatein">
            <h1
              className="gradient"
              style={{ color: "#fff", zIndex: 200, marginBottom: -200 }}
            >
              Hello. I'm Nikhil,
            </h1>
            <p
              className="gradient"
              style={{
                marginTop: 0,
                color: "#56A5BD",
                zIndex: 200,
              }}
            >
              A{" "}
              <Typed
                strings={["Developer.", "Student.", "Hooper."]}
                className="gradient"
                typeSpeed={75}
                backSpeed={70}
                loop
                style={{ color: "#56A5BD", zIndex: 200 }}
              />
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  maxWidth: 800,
                  textAlign: "center",
                  fontSize: 20,
                  marginTop: 10,
                }}
              >
                I am a passionate developer, and a Sophmore in highschool. In my
                freetime I love to play basketball, listen to music, and try new
                foods.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.logo} style={{ marginTop: -20 }}>
          <svg className={styles.text} id="text" viewBox="0 0 850 125">
            <defs>
              <linearGradient id="gradient" y1="0" y2="1">
                <stop stop-color="#fff" offset="0" />
              </linearGradient>
            </defs>
            <text
              fill="none"
              stroke="url(#gradient)"
              transform="translate(3 102)"
              stroke-width="3"
              fontSize="134"
              fontWeight="800"
              letterSpacing="0.1em"
              className={styles.isActive}
            >
              <tspan>Nikhil Rao</tspan>
            </text>
          </svg>
        </div>
      )}
      <div className="container">
        <div className={`bottom-layer ${showTransition ? "active" : ""}`}></div>
        <div
          className={`bottom-layer bottom-layer--2 ${
            showTransition ? "active" : ""
          }`}
        ></div>
        <div
          className={`bottom-layer bottom-layer--3 ${
            showTransition ? "active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Home;
