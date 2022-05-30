import React from "react";
import { CardGame } from "./components";
import { Cards } from "./GameStyled";

const Games = () => {
  return (
    <Cards>
      <CardGame />
      <CardGame />
      <CardGame />
      <CardGame />
    </Cards>
  );
};

export default Games;
