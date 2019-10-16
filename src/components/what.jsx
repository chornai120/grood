import React, { Component } from "react";
import { Image } from "semantic-ui-react";
class What extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="what_about_grood">
          <h1 className="titlesize">
            What's<span className="hh2"> Grood</span>?
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incidicunt ut labore et{" "}
            <span className="style_paragrap">dolore magna aliqua.</span>Ut enim
            and minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
        <div className="image_style">
          <Image src="./image/Kits-With-Bike.png" size="big" centered />
        </div>
      </React.Fragment>
    );
  }
}

export default What;
