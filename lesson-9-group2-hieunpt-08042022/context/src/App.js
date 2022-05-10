import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <Header />
      <div style={{display: "flex", flex: 1, alignItems: "stretch"}}>
        <SideBar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;