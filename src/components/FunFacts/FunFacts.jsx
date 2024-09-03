import React from "react";
import { funFactsList } from "../../Data/Data";
import "./FunFacts.css";

const FunFacts = () => {
  return (
    <div className="Facts">
      {funFactsList.map((fact, index) => {
        return (
          <div className="fact" key={index}>
            <img src={fact.img} alt="pokemonImg" />
            <div className="text">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{fact.text1}</span>
                <span> {fact.text2}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FunFacts;
