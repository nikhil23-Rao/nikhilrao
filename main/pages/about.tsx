import type { NextPage } from "next";
import Typed from "react-typed";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Lottie from "lottie-react";
import lottieOne from "../public/lottieone.json";

const About: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#233830",
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        className="animatein"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <img
          src="/pfp.jpeg"
          style={{
            width: 450,
            height: 800,
            borderRadius: 250,
            zIndex: 200,
            display: "inline-block",
            marginRight: 200,
            border: "5px solid lightgreen",
          }}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            className="gradient"
            style={{
              color: "#fff",
              zIndex: 200,
              display: "inline-block",
              marginTop: -300,
              textAlign: "left",
            }}
          >
            I'm Nikhil.
          </h1>
          <p
            style={{
              color: "gray",
              maxWidth: 800,
              textAlign: "left",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            I am a highschool student currently attending Dougherty Valley High,
            in California. I started coding during the COVID pandemic, and
            instantly loved it. My goal as a programmer is to have fun, and
            build apps for people all across the world to use. In my free time,
            my favorite hobbies include listening to music, playing basketball
            with my brothers, and trying new foods.
          </p>
          <p
            style={{
              color: "gray",
              maxWidth: 800,
              textAlign: "left",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            In terms of programming, my favorite coding language is Typescript,
            and my favorite type of development is definetely web development.
            Throughout the next years of my life my goal is to explore AI and
            machine learning.
          </p>
          <p
            style={{
              color: "gray",
              maxWidth: 800,
              textAlign: "left",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            If this is your first time on my website, check out who I am down
            below!
          </p>
        </div>
      </div>
      <h1>hey</h1>
    </div>
  );
};

export default About;
