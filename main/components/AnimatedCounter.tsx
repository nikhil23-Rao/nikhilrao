// Dependencies
import React, { useState } from "react";

// Hools
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Utils
import { animateValue } from "../utils/countingAnimation";

// UI Components
import StatCard from "./StatCard";

// This is the type for the component below so we get good intellisense when writing code
interface AnimatedStatsProps {
  statsData: Array<{
    statNumber: string;
    statIconUri: string;
    statTitle: string;
  }>;
}

// AnimatedStats component
const AnimatedStats: React.FC<AnimatedStatsProps> = ({
  statsData,
}: AnimatedStatsProps) => {
  const [checking, setChecking] = useState(false);
  const elementIsVisibleInViewport = (el: any, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };
  // Mobile Friendly
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isTablet = useMediaQuery({ query: "(max-width:1424px)" });

  // On page load and when components update

  useEffect(() => {
    console.log(checking);
  }, [checking]);

  // Return JSX code
  return (
    <div
      style={{
        marginTop: 50,
        height: isPortrait ? "2080px" : isTablet ? "1040px" : "740px",
        backgroundColor: "#90EE90",
      }}
      className="animatedstatscontainer text-center"
      id="stat-container"
    >
      <div>
        {statsData.map((stat, idx) => (
          <div style={{ display: "inline-block", marginBottom: 220 }} key={idx}>
            <StatCard
              idx={idx}
              counter={stat.statNumber}
              iconUri={stat.statIconUri}
              title={stat.statTitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
