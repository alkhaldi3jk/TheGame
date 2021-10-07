import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

function Card(props) {
  console.log(props.info);
  const info = props.info;

  return (
    <div className="Cards">
      <Flippy>
        <FrontSide>
          <img src={info.image} alt="" />
        </FrontSide>
        <BackSide>
        
          <img src={info.image} alt=""></img>
        </BackSide>
      </Flippy>
    </div>
  );
}

export default Card;
