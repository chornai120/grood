import React, { Component } from "react";
import { Image } from "semantic-ui-react";
class What extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="whatgrood">
          <h1 className="titlesize">
            What's<span className="hh2"> Grood</span>? Bold Italic 60pt
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <p className="paragrap">
            incidicunt ut labore et
            <span className="hh2">dolore magna aliqua.</span>Ut enim and minim
            veniam, quis
          </p>
          <p className="paragrap">nostrud exercitation ullamco laboris nisi.</p>
        </div>
        <div className="imagestyle">
          <Image src="./image/Kits-With-Bike.png" size="big" centered />
        </div>
      </React.Fragment>
    );
  }
}

export default What;
