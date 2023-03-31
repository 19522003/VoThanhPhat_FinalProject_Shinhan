import React from "react";
import SwitchButton from "../switchButton/SwitchButton";
import "./style.css";
function PlatFormBox(props) {
  return (
    <div className="platform">
      <h5>ACCOUNT</h5>
      <div className="switchContain">
        <SwitchButton></SwitchButton>{" "}
        <span>Email me when someone follows me</span>
      </div>
      <div className="switchContain">
        {" "}
        <SwitchButton></SwitchButton>{" "}
        <span>Email me when someone answers me</span>
      </div>
      <div className="switchContain">
        <SwitchButton></SwitchButton>{" "}
        <span>Email me when someone mentions me</span>
      </div>
      <h5>APPLICATION</h5>
      <div className="switchContain">
        <SwitchButton></SwitchButton> <span>New launches and projects</span>
      </div>
      <div className="switchContain">
        <SwitchButton></SwitchButton> <span>Monthly product updates</span>
      </div>
      <div className="switchContain">
        <SwitchButton></SwitchButton> <span>Subscribe to newsletter</span>
      </div>
    </div>
  );
}

PlatFormBox.propTypes = {};

export default PlatFormBox;
