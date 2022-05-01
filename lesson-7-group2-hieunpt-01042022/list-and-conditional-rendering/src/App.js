import './App.css';
import TodoList from './TodoList';
import Hobbies from './Hobbies';
import Inputs from './Inputs';
import Login from './LogIn';

// Xử lý với mảng dữ liệu, render danh sách động với React và JSX

function App() {
  return (
    <div>
      <TodoList />
      <Hobbies />
      <Inputs />
      <Login />
    </div>
  );
}

export default App;