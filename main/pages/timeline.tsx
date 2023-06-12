import { Navigation } from "../components/Navigation";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Timeline = () => {
  const timelineData = [
    {
      name: "Started Coding",
      description: `print("Hello World"); The foundation to everything...`,
      date: "2018-2019",
      icon: "fa fa-home",
    },
    {
      name: "Exploring Data Science",
      description: `Using popular Python libraries such as NumPy, Pandas, and more, to create awesome charts, and data tables with code.`,
      date: "Summer 2020",
      icon: "fa fa-database",
    },
    {
      name: "Exploring Game Dev In Python",
      description: `I started my exploration into game dev with Python. Using libraries such as Pygame, I started visualizing what it was like to be a game dev.`,
      date: "2020",
      icon: "fa fa-gamepad",
    },
    {
      name: "The Creation of Opera",
      description: `One of my earliest projects with Python. A command line voice assistant with the power to do thing other assistants like Siri could do.`,
      date: "2020",
      icon: "fa fa-android",
    },
    {
      name: "Raspberry Pi Hackathon Finalist",
      description: `Placed 4th place in a Raspberry Pi hackathon, where I built a game with the software.`,
      date: "Feb 2020",
      icon: "fa fa-trophy",
    },
    {
      name: "The Start of My Web Development Journey",
      description: `Embarked on a new journey, a path that I soon admire.`,
      date: "Late 2020",
      icon: "fa fa-laptop",
    },
    {
      name: "Started Learning Javascript",
      description: `30 mins every day, with my brother and dad.`,
      date: "2021",
      icon: "fa fa-code",
    },
    {
      name: "Started Learning HTML/CSS",
      description: `30 mins every day, with my brother and dad.`,
      date: "2021",
      icon: "fa fa-code",
    },
    {
      name: "Entered The World Of React.JS",
      description: `The best javascript framework. No doubt about it.`,
      date: "2021",
      icon: "fa fa-code",
    },
    {
      name: "The Creation of OnTrack",
      description: `A productivity app built with ReactJS to test my knowledge of React, and to help stay on track with assignments.`,
      date: "2021",
      icon: "fa fa-check",
    },
    {
      name: "Typescript It is.",
      description: `My favorite programming language by far. Javascript, but better...`,
      date: "2021",
      icon: "fa fa-code",
    },
    {
      name: "The Creation of Lite",
      description: `A web app inspired by Medium. Create, share, and read articles.`,
      date: "2021",
      icon: "fa fa-book",
    },
    {
      name: "The Creation of ChatPad",
      description: `My first popular app. A real time chat communication app built to chat with friends`,
      date: "2021",
      icon: "fa fa-comment",
    },
    {
      name: "Mobile Apps with React Native",
      description: `IOS/Android skills aquired with the creation of React Native`,
      date: "2022",
      icon: "fa fa-comment",
    },
    {
      name: "Trends",
      description: `Putting my mobile development skills to the test with a social media platform.`,
      date: "2022",
      icon: "fa fa-phone",
    },

    {
      name: "Next.js: The framework in the library",
      description: `React is good, but Next is better...`,
      date: "2022",
      icon: "fa fa-close",
    },
    {
      name: "Identified: Music Anytime, Anywhere",
      description: `A Shazam like application on the web used to identify music with just a short snippet required.`,
      date: "2022",
      icon: "fa fa-music",
    },
    {
      name: "Software Engineer Volunteer At Local Temple",
      description: `In the experience I helped build a NLP based chat bot, and a real time radio player`,
      date: "2022",
      icon: "fa fa-laptop",
    },
    {
      name: "The Categories Game",
      description: `The best app I have built so far. A immersive game following the popular trend of wordle`,
      date: "2022",
      icon: "fa fa-gamepad",
    },
    {
      name: "GameDay",
      description: `An informative sports news website that has a great user interface. Share your sports takes with other users through our community feed.`,
      date: "2022",
      icon: "fa fa-pencil",
    },
    {
      name: "DVHS Robotics Novice",
      description: `Novice member in my school's robotics club. I learned how to build and program with VEX.`,
      date: "2023",
      icon: "fa fa-android",
    },
    {
      name: "EduTools",
      description: `Built for a hackathon, using AI and API's to help students succeed in school.`,
      date: "2023",
      icon: "fa fa-pencil",
    },
    {
      name: "Team 5776A",
      description: `Drafted to one of DVHS's 4 competitive Robotics teams`,
      date: "2023",
      icon: "fa fa-android",
    },
    {
      name: "Robotics Summer Camp Mentor",
      description: `Mentored middle schoolers, and taught them how to think and build like engineers.`,
      date: "Summer 2023",
      icon: "fa fa-android",
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="gradient" style={{ color: "#fff", zIndex: 200 }}>
          My Timeline
        </h1>
        <p
          style={{
            color: "darkgray",
            maxWidth: 700,
            textAlign: "center",
            fontSize: "1vw",
          }}
        >
          All of my experience and projects that I have developed so far. Scroll
          below to see how it all happened. My story is still in progress...
        </p>
      </div>
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
        <VerticalTimeline>
          {timelineData.map((t) => (
            <VerticalTimelineElement
              key={t.date}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#254237" }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={t.date}
              iconStyle={{
                background: "#234146",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={<i className={t.icon} />}
            >
              <h3 className="vertical-timeline-element-title">{t.name}</h3>

              <p style={{ color: "#A9C3B9" }}>{t.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
