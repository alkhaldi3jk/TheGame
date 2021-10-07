import "./App.css";
import CardsList from "./componants/CardsList";


function App() {
  return (
    <div className="App">
      <div className="header">
        <h5>Check Your Memory!!!</h5>
      </div>

      <div className="filppy">
      <CardsList />
      </div>
    </div>
  );
}

export default App;
