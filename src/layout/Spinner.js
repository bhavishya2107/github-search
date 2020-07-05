import React, { Component } from "react";
import "../styleSheets/spinner.css";  

export default class Spinner extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader"/>
      </div>
    );
  }
}
