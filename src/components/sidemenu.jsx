import React, { Component } from "react";
class Side extends Component {
  state = {};
  render() {
    return (
      <div className="side_draw">
        <ul>
          <li>
            <a href="">What's Grood?</a>
          </li>
          <li>
            <a href="">For Better World!</a>
          </li>
          <li>
            <a href="">Pre-Order</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Side;
