import { useState } from "react";

const generateId = () => Math.floor(Math.random() * 10000);

export default function Inputs() {
  const [inputs, setInputs] = useState([]);

  const append = () => {
    setInputs((prev) => {
      return [...prev, generateId()];
    });
  };

  const prepend = () => {
    setInputs((prev) => {
      return [generateId(), ...prev];
    });
  };

  return (
    <div className="App">
      <button onClick={append}>Append</button>
      <button onClick={prepend} style={{marginLeft: 8}}>Prepend</button>
      <ul>
        {inputs.map((input, idx) => {
            return (
            <li key={input} style={{marginTop: 4}}>
                <label style={{marginBottom: 2}}>
                {input}
                <input style={{marginLeft: 8}} />
                </label>
            </li>
            );
        })}
      </ul>
    </div>
  );
}