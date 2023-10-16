import React from 'react';
import '../App.css'
import MenuPanelComponent from '../components/MenuPanelComponent';

function Download() {
  return (
    <div className="faq-container">
      <div className="header">
        <h1>Download Page</h1>
        <button className="download-button">Download Chrome Extension</button>
      </div>
      <div className="menu-panel">
        <MenuPanelComponent
          showButton1={false}
          showButton2={true}
          showButton3={true}
          showButton4={true}
          showButton5={true}
        />
      </div>
    </div>
  );
}

export default Download;
