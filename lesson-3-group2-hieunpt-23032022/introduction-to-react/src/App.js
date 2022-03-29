import logo from './logo.svg';
import './App.css';

function NameCard(props) {
  return (
    <div className="card">
      <div className="name">Name: { props.name }</div>
      <div className="age">Age: { props.age }</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <NameCard name="Alice" age="20" />
      <NameCard name="Bob" age="20" />
      <NameCard name="Cris" age="20" />
    </div>
  );
}

export default App;
