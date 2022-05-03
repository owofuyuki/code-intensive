import './App.css';
import { useState } from 'react';
import Counting from './Counting';
import Scrolling from './Scrolling';

function App() {
  const [scrollingVisible, setScrollingVisible] = useState(true);

  return (
    <div>
      <Counting />
      <button style={{marginTop: 16}} onClick={() => setScrollingVisible(!scrollingVisible)}>Change scrolling visible</button>
      {scrollingVisible && <Scrolling />}
    </div>
  );
}

export default App;