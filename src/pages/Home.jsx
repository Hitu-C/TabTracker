import React from "react";
import '../App.css'
import MenuPanelComponent from "../components/MenuPanelComponent";

export default function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Hello</h1>
      </div>
      <div className="welcome">
        <h2>Welcome to TabTracker</h2>
      </div>
      <div className="description">
        <p>
          This is the home page.
        </p>
      </div>
      <div className="menu-panel">
        <MenuPanelComponent
          showButton1={true}
          showButton2={false}
          showButton3={true}
          showButton4={true}
          showButton5={true}
        />
      </div>
    </div>
  );
}
