//Display certain navigation buttons or not
import React from "react";
import { useNavigate } from 'react-router-dom';

function MenuPanelComponent(props) {
  const { showButton1, showButton2, showButton3, showButton4, showButton5 } = props;

  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <div className="menu-panel-container">
      <button
        className="navigation"
        onClick={() => handleClick('/Download')}
        style={{ display: showButton1 ? "block" : "none" }}
      >
        Download
      </button>
      <button
        className="navigation"
        onClick={() => handleClick('/')}
        style={{ display: showButton2 ? "block" : "none" }}
      >
        Home
      </button>
      <button
        className="navigation"
        onClick={() => handleClick('/Register')}
        style={{ display: showButton3 ? "block" : "none" }}
      >
        Register
      </button>
      <button
        className="navigation"
        onClick={() => handleClick('/Login')}
        style={{ display: showButton4 ? "block" : "none" }}
      >
        Login
      </button>
      <button
        className="navigation"
        onClick={() => handleClick('/FAQ')}
        style={{ display: showButton5 ? "block" : "none" }}
      >
        FAQ
      </button>
    </div>
  );
}

export default MenuPanelComponent;
