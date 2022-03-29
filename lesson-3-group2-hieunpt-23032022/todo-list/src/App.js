import logo from './logo.svg';
import './App.css';

const todoList = [
  {
    task: "Clean up bedroom",
    check: false
  },
  {
    task: "Buy some milk",
    check: false
  },
  {
    task: "Jogging",
    check: false
  },
  {
    task: "Learn React",
    check: false
  },
  {
    task: "Do exercises",
    check: false
  }
];

const completedList = [];

const TaskCounter = (count) => {
  return (count === 1) ? 'task' : 'tasks';
};

// document.querySelector(".task-form").addEventListener("submit", () => {
//   todoList.push({
//     task: document.querySelector(".task-input").value,
//     check: false
//   });
// });

function TaskInput() {
  return (
    <form className="task-form" action="#">
      <input className="task-input" type="text" placeholder="Enter your task here..." required></input>
    </form>
  );
}

function TaskItem(props) {
  return (
    <li className="task-item">
      <div className="task-content">
        <span className="checkbox"></span>
        <p>{props.task}</p>
      </div>
      <p className="remove-btn">Remove</p>
    </li>
  );
}

function TaskList() {
  let items = [];
  todoList.forEach((item) => {
    items.push(<TaskItem key={item.task.toString()} task={item.task} />);
  });
  return (
    <ul className="task-list">
      {items}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="task-counter">{todoList.length + ' ' + TaskCounter(todoList.length)} left!</p>
      <p className="copyright">fuyukiowo</p>
    </footer>
  );
}

function App() {
  return (
    <div className="todo-list">
        <h1 className="title">A Todo-list</h1>
        <TaskInput />
        <TaskList />
        <Footer />
    </div>
  );
}

export default App;