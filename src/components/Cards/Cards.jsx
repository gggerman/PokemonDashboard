import React from "react";
import "./Cards.css";
import { Colors } from "../../Data/Data";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card";
import { filterByType } from "../../Redux/Actions";

const Cards = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.types);

  console.log("AAAAAAAAAAAAAAAAAAAAA", allTypes);

  const handleType = (e, type) => {
    console.log(type);
    dispatch(filterByType(type));
  };

  console.log("COLORS", Colors.find((color) => color.name === "normal").color)

  return (
    <div className="Cards">
      {allTypes.map((type) => {
        console.log("TYPE", type);
        return (
          <div className="parentContainer" onClick={(e) => handleType(e, type)}>
            <Card
              name={type.charAt(0).toUpperCase() + type.slice(1)}
              color={Colors.find((color) => color.name === type).color}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
