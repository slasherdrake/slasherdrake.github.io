import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import './App.css'
const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <NavBar />
        <div className='nav-space'></div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;

