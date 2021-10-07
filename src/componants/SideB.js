import React from "react";
import Cards from './Cards'
import CardB from '../CardB'
import Shuffle from './Shuffle'
export default function SideB() {
    let faceup= CardB.map(element=><Cards info={element} />)

    
  return (
    <div className="sideB">
        <Shuffle/>
        {faceup}
    </div>
  );
}
