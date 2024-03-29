import type { NextPage } from "next";
import Typed from "react-typed";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Lottie from "lottie-react";
import { experience } from "../utils/experience";
import { useMediaQuery } from "react-responsive";
import { getAuth } from "../utils/connectSpotify";
import AnimatedStats from "../components/AnimatedCounter";
import { statsData } from "../utils/statsData";

const Home: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [showTransition, setShowTransition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const show = localStorage.getItem("showContent");
    setTimeout(() => {
      if (!show) setShowTransition(true);
    }, 4500);
  }, []);

  useEffect(() => {
    const show = localStorage.getItem("showContent");
    if (show) setShowContent(true);
    else {
      setTimeout(() => {
        localStorage.setItem("showContent", "true");
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (showTransition) {
      setTimeout(() => {
        setShowContent(true);
      }, 660);
    }
  }, [showTransition]);

  useEffect(() => {
    // getAuth();
  }, []);

  const projects = [
    {
      id: 1,
      name: "Categories",
      description: "A Wordle type thinking puzzle.",
    },
    {
      id: 2,
      name: "Identified",
      description: "Identify music, any time, anywhere.",
    },
    {
      id: 3,
      name: "ChatPad",
      description: "Real-time messaging to chat with others.",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#233830",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
      id="scroller"
    >
      {showContent ? (
        <>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              height: 0,
            }}
          >
            <div
              className="gradientbg"
              style={{
                zIndex: 1,
                position: "absolute",
              }}
            >
              <div className="firstdiv"></div>
              <div className="canvasholder">
                <canvas className="canvas" style={{ height: "100vh" }}></canvas>
              </div>
            </div>
          </div>
          <Navigation />

          <div
            style={{
              zIndex: 400,
            }}
          >
            {" "}
            <div className="animatein">
              <h1
                className="gradient"
                style={{ color: "#fff", zIndex: 200, marginBottom: -200 }}
              >
                Hello. I am Nikhil,
              </h1>
              <p
                className="gradient"
                style={{
                  marginTop: 0,
                  color: "lightgreen",
                  zIndex: 200,
                }}
              >
                A{" "}
                <Typed
                  strings={["Developer.", "Student.", "Researcher."]}
                  className="gradient"
                  typeSpeed={75}
                  backSpeed={70}
                  loop
                  style={{ color: "lightgreen", zIndex: 200 }}
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
                  I am a passionate developer, and a Sophmore in highschool. In
                  my freetime I love to play basketball, listen to music, and
                  try new foods.
                </p>
              </div>
              <section style={{ marginTop: 10, zIndex: 500, padding: 40 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h1
                    className="gradient"
                    style={{ color: "#fff", zIndex: 400, letterSpacing: 2 }}
                  >
                    My Projects
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="grid">
                    {projects.map((project) => (
                      <figure
                        style={{ width: 450, cursor: "pointer" }}
                        key={project.description}
                      >
                        <picture>
                          <img
                            src={`/cardbg${project.id}.jpeg`}
                            alt="The Ramp game promotional image"
                            style={{ width: "100%", height: 200 }}
                          />
                        </picture>
                        <figcaption>
                          <img
                            src={`/cardbg${project.id}.jpeg`}
                            aria-hidden="true"
                            style={{ width: "100%" }}
                          />
                          <section className="adaptive-glass">
                            <h3>{project.name}</h3>
                            <p style={{ color: "#fff" }}>
                              {project.description}
                            </p>
                          </section>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </section>
              <section
                style={{
                  marginTop: isPortrait ? 40 : isTabletOrMobile ? -410 : -610,
                  zIndex: 500,
                  padding: 40,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <h1
                    className="gradient"
                    style={{ color: "#fff", zIndex: 400, letterSpacing: 2 }}
                  >
                    My Experience
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "row",
                  }}
                >
                  <Lottie
                    animationData={require("../public/lottieone.json")}
                    style={{
                      display: isPortrait ? "none" : "inline-block",
                      verticalAlign: "middle",
                    }}
                    id="lottie"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <h1
                      className="gradient"
                      style={{ fontSize: "6vw", letterSpacing: 2 }}
                    >
                      Years of Knowledge...
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ul
                        style={{
                          listStyleType: "circle",
                          maxWidth: 700,
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        {experience.map((e) => (
                          <div style={{ display: "inline" }} key={e}>
                            <li
                              style={{
                                color: "#fff",
                                fontSize: 23,
                                listStyleType: "circle",
                                marginBottom: 20,
                              }}
                            >
                              {e}
                            </li>
                          </div>
                        ))}
                        <p
                          style={{
                            marginTop: 20,
                            color: "lightgreen",
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          View more in timeline
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <main>
                <footer id="site__footer" className="footer">
                  <section
                    className="footer__top"
                    style={{
                      height: "100%",
                    }}
                  >
                    <div className="footer__inner">
                      <AnimatedStats statsData={statsData} />
                    </div>
                  </section>
                  <section>
                    <div className="footer__inner">
                      <h1>Spotify</h1>
                      <div className="row"></div>
                      <div className="row">
                        <div className="col-xs-6">
                          <p className="text--smaller text--light">
                            Nam nec tellus et tellus tempor auctor. Fusce sit
                            amet dui elit. Fusce eget urna aliquam, lobortis dui
                            nec, malesuada dui. Proin nec leo accumsan, gravida
                            sem ac, tristique sapien. Aenean ornare nisi vitae
                            sollicitudin dignissim. Aliquam libero massa, varius
                            imperdiet libero eget, gravida suscipit urna.
                          </p>
                        </div>
                        <div className="col-xs-6 col-sm-offset-3 col-sm-3">
                          <p className="text--light text--smaller">
                            Copyright 20222 Company Inc. All rights something.
                          </p>
                          <p>
                            <a href="#" className="link--light text--smaller">
                              Terms and Conditions
                            </a>{" "}
                            |{" "}
                            <a href="#" className="link--light text--smaller">
                              Privacy Policy
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </footer>
              </main>
            </div>
          </div>
        </>
      ) : (
        <div className="logo" style={{ marginTop: -20 }}>
          <svg className="text" id="text" viewBox="0 0 850 125">
            <defs>
              <linearGradient id="gradient" y1="0" y2="1">
                <stop stopColor="#fff" offset="0" />
              </linearGradient>
            </defs>
            <text
              fill="none"
              stroke="url(#gradient)"
              transform="translate(3 102)"
              strokeWidth="3"
              fontSize="134"
              fontWeight="800"
              letterSpacing="0.1em"
              className="isActive"
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
