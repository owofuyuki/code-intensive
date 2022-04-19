import {useState} from "react";
import './App.css';

const TrafficLights = () => {
  const countState = useState(0);
  const count = countState[0];
  const setCount = countState[1];
  // const [count, setCount] = useState(0);

  console.log("countState: ", countState);

  const changeColor = () => { setCount(count + 1); };

  return (
    <div>
      <button className="btn" onClick={changeColor}>Next</button>
      <ul className="traffic-lights">
        <li className="light"></li>
        <li className="light"></li>
        <li className="light"></li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <div>
      <TrafficLights />
    </div>
  );
}

export default App;