import React from "react";
import Cards from "../Cards";
import Card from "./Card";
// import { useState } from "react";

function CardsList() {
  // const [card, setCard] = useState({
  //     id: 1,
  //     name: "card",
  //     image:
  //     "https://st2.depositphotos.com/1803332/9245/v/950/depositphotos_92457980-stock-illustration-playing-cards-back.jpg",
  // });

  let CardsArray = Cards.map((element) => <Card info={element} />);

  return <div className="cards-list">{CardsArray}</div>;
}

export default CardsList;
