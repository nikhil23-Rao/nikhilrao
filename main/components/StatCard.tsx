// Dependencies
import React from "react";

// Types
import CSS from "csstype";

// This is the type for the component below so we get good intellisense when writing code
interface StatCardProps {
  iconUri: string;
  title: string;
  counter: string;
  idx: number;
  style?: CSS.Properties;
}

// StatCard component
const StatCard: React.FC<StatCardProps> = ({
  iconUri,
  title,
  counter,
  idx,
}) => {
  // Return JSX code
  return (
    <>
      <div
        className="counter-box"
        id="counterbox"
        style={{ backgroundColor: "#90EE90" }}
      >
        <div className="counterContainer"></div>

        <div
          className="center-parent"
          style={{ top: -40, position: "relative" }}
        >
          <img
            src={iconUri}
            alt=""
            style={{
              width: 80,
              height: 80,
              borderRadius: 200,
              border: "2px solid #103025",
              marginTop: 40,
            }}
            className="mx-auto"
          />
        </div>
        <p className="counter" id={`value${idx}`}>
          {idx === 0 ? "23" : idx === 1 ? "5" : idx === 2 ? "17" : "6"}
        </p>
        <h6>{title}</h6>
        <div className="counterBottomContainer"></div>
      </div>
    </>
  );
};

export default StatCard;
