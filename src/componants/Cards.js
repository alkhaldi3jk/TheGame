
import React from "react";

function Cards(props) {
  console.log(props.info);
  const info = props.info;

  return (
    <div className="cards">
      <img src={info.image} alt="" />
    </div>
  );
}

export default Cards;