import React from "react";
import "./ScanBanner.css";

function ScanBanner() {
  return (
    <div className="scanColumn">
      <div>
        <h1>145</h1>
        <p>Scans Today</p>
      </div>
      <div>
        <h1>329,023</h1>
        <p>Total Scans</p>
      </div>
      <div>
        <h1>1.3 million</h1>
        <p>Global Scans</p>
      </div>
    </div>
  );
}

export default ScanBanner;
