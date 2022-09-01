import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "./Card.css";

// Card

const Card = (props) => {
  return (
    <AnimateSharedLayout>
      <motion.div
        className="Card"
        style={{
          background: props.color.backGround,
          boxShadow: props.color.boxShadow,
        }}
      >
        <div className="typeName">
          <span>{props.name}</span>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Card;
