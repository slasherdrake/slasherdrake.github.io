import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import './App.css'
const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

