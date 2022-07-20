import './App.css';
import UseHover from './UseHover.js';
import UseInput from './UseInput.js';
import UseLocalStorage from './UseLocalStorage.js';

function App() {
  return (
    <div>
      <UseInput />
      <UseHover />
      <UseLocalStorage />
    </div>
  );
}

export default App;

// useState, useEffect, useContext, useMemo, useCallback, useRef...

// Hooks phải bắt đầu bằng "use"
// Hooks không thể gọi trong một vòng lặp, một function, một câu điều kiện
// Hooks chỉ được gọi trực tiếp trong components hoặc trong hooks khác