import React from "react";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="weather-container">
        <div className="header">Location</div>
        <div className="inner-container">
          <div className="image">IMG</div>
          <div className="current-weather">10</div>
        </div>
        <div className="footer">Sunny</div>
      </div>
    );
  }
}
