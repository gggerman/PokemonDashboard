import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import { useDispatch } from "react-redux";
import { SidebarData } from "../../Data/Data";
import { motion } from "framer-motion";
import { filterByGeneration } from "../../Redux/Actions";
import { UilBars } from "@iconscout/react-unicons";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const handleGeneration = (e, generation) => {
    dispatch(filterByGeneration(generation));
  };

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Pok<span>é</span>mon
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={(e) => {
                  setSelected(index);
                  handleGeneration(e, item.heading);
                }}
              >
                <img className="pokeballLogo" src={item.icon} alt="pokeball" />
                {window.innerWidth <= 1200 && window.innerWidth >= 768 ? (
                  <span>{item.heading.slice(0, 3)}</span>
                ) : (
                  <span>{item.heading}</span>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
