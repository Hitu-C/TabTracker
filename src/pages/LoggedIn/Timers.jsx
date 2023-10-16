import React from "react";
import DashboardPanelComponent from "../../components/DashboardPanelComponent";

export default function Timers() {
  return (
    <div>
        <div className="dashboard-container">
        <div className="dashboard-label">
            <h1>Timers</h1>
        </div>
        </div>
        <div className="menu-panel">
        <DashboardPanelComponent
          showButton1={true}
          showButton2={false}
          showButton3={true}
        />
      </div>
    </div>
  );
}
