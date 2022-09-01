import React from "react";
import FunFacts from "../FunFacts/FunFacts";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Fun Facts</h3>
        <FunFacts />
      </div>
    </div>
  );
};

export default RightSide;
