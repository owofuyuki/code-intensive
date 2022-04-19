import {useState} from "react";

const Counter = () => {
  const countState = useState(0);
  const count = countState[0];
  const setCount = countState[1];
  // const [count, setCount] = useState(0);
  // Sử dụng const thay vì let để biết việc gán lại dữ liệu cho state là không thể

  console.log("countState: ", countState);

  const onIncrease = () => { setCount(count + 1); };

  const onIncreaseMouseOver = () => { console.log("Mouse just passed!"); };

  return (
    <div style={{marginBottom: 8}}>
      <span>{count}</span>
      <button style={{marginLeft: 8}} onClick={onIncrease} onMouseOver={onIncreaseMouseOver}>Increase</button>
    </div>
  );
};

const Person = () => {
  const [person, setPerson] = useState({
    name: "Fuyuki",
    age: 20,
  });

  const onIncreaseAge = () => { setPerson({...person, age: person.age + 1}); };
  // const onIncreaseAge = () => { setPerson((prev) => { return { ...prev, age: prev.age + 1 }; }) };
  /* 
  Sử dụng spread operator để copy toàn bộ giá trị của person qua một object mới,
  sau đó sửa lại giá trị age tương ứng. Lúc này, giá trị cũ và giá trị mới là hai object khác nhau. 
  React sẽ nhận biết được và cập nhật lại giao diện.
  -> Luôn truyền vào một object mới có địa chỉ ô nhớ mới để React nhận biết
  */

  return (
    <div style={{display: "flex", marginBottom: 8, lineHeight: 0}}>
      <p>Hello, my name is {person.name} and i'm {person.age}!</p>
      <button style={{marginLeft: 8}} onClick={onIncreaseAge}>Increase Age</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Person />
      <Counter />
      <Counter />
      <Counter />
      {/* Ba <Counter /> là độc lập và khác nhau */}

    </div>
  );
}

export default App;