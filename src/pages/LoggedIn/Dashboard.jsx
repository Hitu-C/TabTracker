import React from "react";
import DashboardPanelComponent from "../../components/DashboardPanelComponent";

export default function Dashboard() {
  return (
    <div>
        <div className="dashboard-container">
        <div className="dashboard-label">
            <h1>Dashboard</h1>
        </div>
        <div className="dashboard-graph"></div>
        </div>
        <div className="menu-panel">
        <DashboardPanelComponent
          showButton1={false}
          showButton2={true}
          showButton3={true}
        />
      </div>
    </div>
  );
}
