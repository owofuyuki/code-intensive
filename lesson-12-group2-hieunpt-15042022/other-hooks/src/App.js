import './App.css';
import Ref from './components/Ref.js';
import Memo from './components/Memo.js';
import UseMemo from './components/UseMemo.js';

function App() {
  return (
    <div>
      <Ref />
      <Memo />
      <UseMemo />
    </div>
  );
}

export default App;