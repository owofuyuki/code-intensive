import './App.css';
import TodoList from './TodoList';
import Hobbies from './Hobbies';
import Inputs from './Inputs';

// Xử lý với mảng dữ liệu, render danh sách động với React và JSX

function App() {
  return (
    <div>
      <TodoList />
      <Hobbies />
      <Inputs />
    </div>
  );
}

export default App;