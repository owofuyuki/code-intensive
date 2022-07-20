import { useLocalStorage } from "./Hooks.js";

const UseLocalStorage = () => {
  const [count, setCount] = useLocalStorage("Count");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ margin: 16 }}>
      {count}
      <button style={{ marginLeft: 8 }} onClick={handleIncrease}>Increase</button>
      <button style={{ marginLeft: 8 }} onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default UseLocalStorage;