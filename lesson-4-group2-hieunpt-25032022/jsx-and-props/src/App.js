import NameCard from "./NameCard";
import Card from "./Card"

function App() {
  return (
    <div>
      <Card>
        <NameCard name="Alice" age="20">
          <div>namecard</div>
        </NameCard>
        <NameCard name="Bob" age="22" />
        <NameCard name="Cris" age="18" />
      </Card>
    </div>
  );
}

export default App;