import NameCard from "./NameCard.js";
import Counter from "./Counter.js";

const ClassComponents = () => {
  return (
    <div>
      <NameCard name="Alice" age={20} />
      <Counter />
    </div>
  );
};

export default ClassComponents;