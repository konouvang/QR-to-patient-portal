import React, { Component } from "react";
import Steps from "../Steps/Steps";
import "./SideBar.css";
import stepsItems from "./SideBarStepItems";

export default class SideBar extends Component {
  render() {
    let stepsArray = stepsItems.steps;
    let htmlOutput = stepsArray.map((step) => {
      return <Steps sideBarSteps={step} key={step.step} />;
    });
    return <div className="col-two">{htmlOutput}</div>;
  }
}
