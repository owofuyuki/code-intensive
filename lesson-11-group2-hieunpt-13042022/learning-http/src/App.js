import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import PokemonDetail from './components/PokemonDetail.js';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;