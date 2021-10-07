import "./App.css";
import CardsList from "./componants/CardsList";
import { useState } from "react";

function App() {
  
  const [carddown, setCarddown] = useState(  {
    id: 3,
    name: "dolphin",
    image:
      "https://st2.depositphotos.com/1803332/9245/v/950/depositphotos_92457980-stock-illustration-playing-cards-back.jpg",
  },
);

  return (
    <div>
      <div className="header">
        <h5>Header</h5>
      </div>
      <div className="cards-box">
        <CardsList setCarddown={setCarddown} carddown={carddown}/>
      </div>
    </div>
  );
}

export default App;