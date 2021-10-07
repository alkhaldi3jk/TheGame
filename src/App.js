import "./App.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import SideA from './componants/SideA'
import SideB from './componants/SideB'

function App() {
  return (
    <div>
      <div className="header">
        <h5>Header</h5>
      </div>

      <div className="filppy">
        <Flippy>
          <FrontSide>
            <SideA />
          </FrontSide>
          <BackSide>
            <SideB />
          </BackSide>
        </Flippy>
      </div>
    </div>
  );
}

export default App;
