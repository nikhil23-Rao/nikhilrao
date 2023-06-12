import { useState } from "react";
import { Navigation } from "../components/Navigation";

const Timeline = () => {
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [input, setInput] = useState("");
  const [projectsData, setProjectsData] = useState([
    {
      int: randomIntFromInterval(1, 3),
      id: 1,
      name: "Categories",
      description: "A Wordle type thinking puzzle.",
      link: "https://github.com/nikhil23-Rao/Categories.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 2,
      name: "Identified",
      description: "Identify music any time, anywhere.",
      link: "https://github.com/nikhil23-Rao/MusicIdentify.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 3,
      name: "ChatPad",
      description: "Real-time messaging to chat with others.",
      link: "https://github.com/nikhil23-Rao/ChatPad.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 4,
      name: "TikTokScraper",
      description: "Data scraper off of TikTok.",
      link: "https://github.com/nikhil23-Rao/TikTokPlay.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 5,
      name: "Lite",
      description: "Read, share, write articles.",
      link: "https://github.com/nikhil23-Rao/Lite.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 6,
      name: "EduTools",
      description: "Tools that make being a student easier.",
      link: "https://github.com/vinayRao23/hackathonsdg.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 7,
      name: "Trends",
      description: "Social media app.",
      link: "https://github.com/nikhil23-Rao/Trends.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 8,
      name: "Campus",
      description: "Connect with your classroom.",
      link: "https://github.com/vinayRao23/Campus.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 9,
      name: "Vibes",
      description: "Advanced music player",
      link: "https://github.com/nikhil23-Rao/Vibes.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 10,
      name: "Livermore Temple Website",
      description: "With an AI chat bot and real time music player.",
      link: "https://github.com/prasunad/React-chatbot.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 11,
      name: "Connections",
      description: "Wikipedia Speedrun game",
      link: "https://github.com/nikhil23-Rao/Connections.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 12,
      name: "SoundBites",
      description: "AI music finder",
      link: "https://github.com/nikhil23-Rao/SoundBites.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 13,
      name: "BookMarked",
      description: "First GraphQL project",
      link: "https://github.com/nikhil23-Rao/graphql-bookmarked-frontend.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 13,
      name: "DVR Dev Tourney",
      description: "Code for DVR tourney.",
      link: "https://github.com/nikhil23-Rao/dvrdevtourney.git",
    },
    {
      int: randomIntFromInterval(1, 3),
      id: 13,
      name: "React Quiz!",
      description: "First ever React app.",
      link: "https://github.com/nikhil23-Rao/React-Quiz.git",
    },
  ]);

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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="gradient" style={{ color: "#fff", zIndex: 200 }}>
          My Projects
        </h1>
        <p
          style={{
            color: "darkgray",
            maxWidth: 700,
            textAlign: "center",
            fontSize: "1vw",
          }}
        >
          I have built dozens of applications. Check out each one and how it
          works below!
        </p>
        <div className="input-box" style={{ zIndex: 200, marginTop: 20 }}>
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search Projects..."
            onChange={(e) => {
              setInput(e.currentTarget.value);
            }}
          />
          <button className="button">Search</button>
        </div>
      </div>

      <div
        className="grid animatein"
        style={{
          padding: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        {projectsData
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .filter((p) => p.name.toLowerCase().includes(input.toLowerCase()))
          .map((project) => {
            return (
              <div
                onClick={() => window.open(project.link)}
                key={project.description}
              >
                <figure
                  style={{
                    width: 450,
                    margin: 50,
                    cursor: "pointer",
                  }}
                >
                  <picture>
                    <img
                      src={`/cardbg${project.int}.jpeg`}
                      alt="The Ramp game promotional image"
                      style={{ width: "100%", height: 200 }}
                    />
                  </picture>
                  <figcaption>
                    <img
                      src={`/cardbg${project.int}.jpeg`}
                      aria-hidden="true"
                      style={{ width: "100%" }}
                    />
                    <section className="adaptive-glass">
                      <h3>{project.name}</h3>
                      <p style={{ color: "#fff" }}>{project.description}</p>
                    </section>
                  </figcaption>
                </figure>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Timeline;
