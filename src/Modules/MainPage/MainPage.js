import React from "react";
import Brand from "../Brand/Brand";
import QR from "../QR/QR";
import ScanBanner from "../ScanBanner/ScanBanner";
import "./MainPage.css";
import QRCode from "qrcode.react";

function MainPage() {
  return (
    <div className="col-one">
      <div className="row-one">
        <Brand />
      </div>
      <div className="row-two">
        <div className="qr-clear"></div>
        <QR />
        <div className="qr-gray"></div>
      </div>
      <div className="row-three">
        <ScanBanner />
      </div>
    </div>
  );
}

export default MainPage;
