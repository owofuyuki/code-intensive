import { useInput } from "./Hooks.js";

const UseInput = () => {
  const input = useInput();

  // const handleInputChanged = (event) => {
  //   setInput(event.target.value);
  // };

  const handleGetValue = () => {
    console.log(input.value);
  }

  return (
    <div>
      <input style={{ marginRight: 8 }} type="text" value={input.value} onChange={input.handleChange} />
      <button onClick={handleGetValue}>Get value</button>
    </div>
  );
};

export default UseInput;
 