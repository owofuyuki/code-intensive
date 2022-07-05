import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Welcome from './components/Welcome.js';
import Products from './components/Products.js';
import ProductDetail from './components/ProductDetail';
import Profile, { AboutMe, Courses } from './components/Profile.js';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1> } />
      </Routes>
      <footer style={{marginTop: 16}}>Made by Fuyuki</footer>
    </div>
  );
}

export default App;

// Nội dung chỉ thay đổi khi các thành phần được đặt trong <Routes></Routes>

/*
example.com/          --> Home      --> Component A
example.com/welcome   --> Welcome   --> Component B
example.com/products  --> Products  --> Component C
*/