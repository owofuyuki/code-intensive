const Counter = () => {
  const onIncrease = () => {
    console.log("Increase clicked");
  };

  return (
    <div>
      <span>0</span>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;