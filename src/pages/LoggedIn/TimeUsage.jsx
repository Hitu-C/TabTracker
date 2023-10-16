import React from "react";
import DashboardPanelComponent from "../../components/DashboardPanelComponent";

export default function TimeUsage() {
  return (
    <div>
        <div className="dashboard-container">
        <div className="dashboard-label">
            <h1>Time Usage</h1>
        </div>
        </div>
        <div className="menu-panel">
        <DashboardPanelComponent
          showButton1={true}
          showButton2={true}
          showButton3={false}
        />
      </div>
    </div>
  );
}
