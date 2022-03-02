import QRCode from "qrcode.react";
import "./QR.css";
import React, { Component } from "react";

class QR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    this.fetchUrl();
    setInterval(() => {
      this.fetchUrl();
    }, 180000);
  }

  fetchUrl() {
    fetch("http://localhost:3000/data/1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.attributes.publicUrl,
        });
      });
  }

  render() {
    var url = JSON.stringify(this.state.items);
    return (
      <div className="qr-box">
        <h3>SCAN TO START</h3>
        <QRCode className="qr-code" value={url} size={275} />
        <p>Powered by OBERD</p>
      </div>
    );
  }
}

export default QR;
