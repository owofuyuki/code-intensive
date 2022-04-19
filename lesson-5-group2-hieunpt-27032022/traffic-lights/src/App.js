import {useState} from "react";
import './App.css';

const Button = ({ index, onClick }) => {
  return (
    <button className={`btn ${index}`} onClick={onClick}>
      { index }
    </button>);
};

const Buttons = ({ children }) => {
  return (
    <div className="btn-wrapped">
      { children }
    </div>
  )
};

const Light = ({ color }) => {
  return <li className={`light ${color}`}></li>;
};

const TrafficLights = ({ children }) => {
  return (
    <ul className="traffic-lights">
      { children }
    </ul>);
};

function App() {
  const [light, setLight] = useState(0);

  const backClick = () => {
    if (light === 0) setLight(light + 2);
    else setLight(light - 1);
  };

  const nextClick = () => {
    if (light === 2) setLight(light - 2);
    else setLight(light + 1);
  };

  return (
    <div className="container">
      <h1 className="title">A Simple Traffic Lights</h1>
      <Buttons>
        <Button index="Back" onClick={backClick} />
        <Button index="Next" onClick={nextClick} />
      </Buttons>
      <TrafficLights>
        <Light color={light === 0 ? "red" : ""} />
        <Light color={light === 1 ? "yellow" : ""} />
        <Light color={light === 2 ? "green" : ""} />
      </TrafficLights>
    </div>
  );
}

export default App;