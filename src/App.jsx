import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/detail/Details';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <BrowserRouter>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
