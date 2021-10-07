
import React from "react";
import Cards from "../Card";
import Card from "./Cards";
function CardsList() {
  let CardsArray = Cards.map((element) => <Card info={element} />);

  return <div className="cards-list">{CardsArray}</div>;
}

export default CardsList;

