import React from "react";
import Cards from './Cards'
import Card from '../Card'
export default function SideA(props) {
  

    let faceDown= Card.map(element=><Cards info={element}/>)

  return (
    <div className="sideA">
        
        {faceDown}

    </div>
  );
}
