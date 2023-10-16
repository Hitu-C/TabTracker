//Display certain navigation buttons or not for the dashboard
import React from "react";
import { useNavigate } from 'react-router-dom';

function DashboardPanelComponent(props) {
  const { showButton1, showButton2, showButton3} = props;

  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <div className="dashboard-panel-container">
      <button
        className="navigationDashboard"
        onClick={() => handleClick('/account/Dashboard')}
        style={{ display: showButton1 ? "block" : "none" }}
      >
        Dashboard
      </button>
      <button
        className="navigationDashboard"
        onClick={() => handleClick('/account/Timers')}
        style={{ display: showButton2 ? "block" : "none" }}
      >
        Timers
      </button>
      <button
        className="navigationDashboard"
        onClick={() => handleClick('/account/TimeUsage')}
        style={{ display: showButton3 ? "block" : "none" }}
      >
        Time Usage
      </button>
    </div>
  );
}

export default DashboardPanelComponent;