import type { NextPage } from "next";
import { Navigation } from "../components/Navigation";
import { useMediaQuery } from "react-responsive";

const About: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const traits = [
    {
      name: "Hard Working",
      id: "01",
      description: `I am hard working because I consistently exhibit a strong work ethic and a dedication to achieving my goals. My commitment to putting in the necessary time, effort, and perseverance is evident in the quality of my work and the results I consistently produce. My determination and drive allow me to tackle challenges head-on, and I always go above and beyond to deliver excellence in everything I do. My hard work is a reflection of my personal values and my desire to continuously improve and succeed.      `,
      img: "/pfp2.jpeg",
    },
    {
      name: "Determined",
      id: "02",
      description: `I am determined because I possess an unwavering resolve and steadfastness in pursuing my objectives. My determination drives me to overcome obstacles and persist even in the face of adversity. I consistently set high standards for myself and refuse to settle for mediocrity. I maintain a strong focus on my goals and channel my energy into taking the necessary steps to achieve them. My determination fuels my perseverance, resilience, and the ability to push beyond my comfort zone. It is this unwavering determination that propels me forward and enables me to reach new heights of success.`,
      img: "/pfp3.jpeg",
    },
    {
      name: "Competitive",
      id: "03",
      description: `I am competitive because I possess a strong drive to excel and outperform myself and others. The spirit of competition fuels my motivation and pushes me to continuously strive for improvement. I thrive on challenges and enjoy testing my abilities against worthy opponents. I embrace competition as an opportunity for growth and use it as a catalyst to push my limits and discover my true potential. Whether it's in the workplace, sports, or any other endeavor, my competitive nature compels me to give my best and achieve exceptional results.`,
      img: "/pfp4.jpeg",
    },
    {
      name: "Optimistic",
      id: "04",
      description: `I am optimistic because I have a positive and hopeful outlook on life and its challenges. My optimism allows me to approach obstacles with a belief that there are opportunities for growth and solutions in every situation. I choose to focus on the bright side, even in the face of setbacks, and maintain an unwavering belief in my ability to overcome difficulties. With an optimistic mindset, I find the motivation to persevere through tough times and maintain a proactive and solutions-oriented approach. My optimism not only uplifts my own spirits but also inspires those around me, creating a positive and supportive environment for collaboration and success.`,
      img: "/pfp5.jpeg",
    },
  ];
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
            display: isTabletOrMobile ? "none" : "inline-block",
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
            I Am Nikhil.
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

      <div className="gridlayout">
        {traits.map((t) => (
          <div key={JSON.stringify(t)}>
            <div className="griditem">
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  width: "100vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40vw",
                  }}
                >
                  <div className="number">{t.id}</div>
                  <h3>{t.name}</h3>
                  <p className="description" style={{ maxWidth: "30vw" }}>
                    {t.description}
                  </p>
                </div>
                <img
                  src={t.img}
                  style={{
                    width: 400,
                    height: 600,
                    borderRadius: 25,
                    marginLeft: 20,
                    border: "5px solid lightgreen",
                    objectFit: "cover",
                    display: isTabletOrMobile ? "none" : "inline-block",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
