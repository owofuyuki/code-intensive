// import { useState } from "react";
import './App.css';
import Form from "./Form";
import List from "./List";

function App() {
  return (
    <div>
      <Form />
      <List />
    </div>
  );
}

// function App() {
//   const [alice, setAlice] = useState({name: "Alice", age: 10});
//   const [bob, setBob] = useState({name: "Bob", age: 10});
//   const increaseAliceAge = () => { setAlice({ ...alice, age: alice.age + 1, }) };
//   const increaseBobAge = () => { setBob({ ...bob, age: bob.age + 1, }) } ;
//   return (
//     <div>
//       <NameCard name={alice.name} age={alice.age} onIncreaseAge={increaseAliceAge} />
//       <NameCard name={bob.name} age={bob.age} onIncreaseAge={increaseBobAge} />
//     </div>
//   );
// }; 

// const NameCard = (props) => {
//   return (
//     <div>
//       <div>Hello, my name is {props.name}. I'm {props.age} years old</div>
//       <button onClick={props.onIncreaseAge}>Increase age</button>
//     </div>
//   );
// };

export default App;