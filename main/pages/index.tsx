import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTransition(true);
    }, 5000);
  }, [typeof window]);

  useEffect(() => {
    if (showTransition) {
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }
  }, [showTransition]);

  return (
    <div className={styles.logo} style={{ marginTop: 150 }}>
      {showContent ? (
        <h1>main content here</h1>
      ) : (
        <svg className={styles.text} id="text" viewBox="0 0 850 125">
          <defs>
            <linearGradient id="gradient" y1="0" y2="1">
              <stop stop-color="#000" offset="0" />
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
