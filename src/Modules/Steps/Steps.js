import React, { Component } from "react";
import "./Steps.css";

export default class Steps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.sideBarSteps,
    };
  }

  render() {
    const sideBarData = this.state;
    return (
      <div className="step">
        <img src={sideBarData.data.icon} className="icon" />
        <h2>{sideBarData.data.step}</h2>
        <p>{sideBarData.data.direction}</p>
      </div>
    );
  }
}
