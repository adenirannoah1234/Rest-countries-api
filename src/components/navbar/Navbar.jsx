import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="mode">
      <h1>Where in the world?</h1>
      <div className="darkmode-toggle" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
    </nav>
  );
};

export default Navbar;
