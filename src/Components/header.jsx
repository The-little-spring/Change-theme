import { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-secondary"
      }  shadow-sm`}
    >
      <div className="container">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">Products</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">About us</a>
          </li>
          <li className="navbar-item">
            <a className="nav-link">Contact us</a>
          </li>
        </ul>
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"} `}
          onClick={changeMode}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
