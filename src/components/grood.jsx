import React, { Component } from "react";
import { Button, Image } from "semantic-ui-react";
import What from "./what";
import Why from "./why";
import Togglebutton from "./togglebutton";
import Side from "./sidemenu";
import { Link } from "react-scroll";
class Groodd extends Component {
  state = {};
  handleClick = () => {};
  render() {
    return (
      <React.Fragment>
        <div className="head">
          <div className="tg">
            <Togglebutton />
          </div>
          <div className="menu">
            <ul className="style">
              <li className="listimg">
                <Image src={"./image/grood-w.png"} size="tiny" />
              </li>
              <li className="listgrood">
                <Link
                  activeClass="active"
                  to="what"
                  spy={true}
                  smooth={true}
                  offset={23}
                  duration={500}
                >
                  What's Grood?
                </Link>
              </li>
              <li className="listmenu">
                <Link
                  activeClass="active"
                  to="why"
                  spy={true}
                  smooth={true}
                  offset={600}
                  duration={500}
                >
                  For Better World!
                </Link>
              </li>
              <li className="listbtn">
                <Button className="insize" primary onClick={this.handleClick}>
                  Pre-Order Now
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="ridebike">
          <div className="ride">
            <div className="banner">
              <h2 className="mybike">Ride Grood for:Bold Italic 60pt </h2>
              <h1 className="better">Better world 100pt</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                <br />
                sed do eiusmod tempor incididunt ut labore et dolore
                <br />
                magna aliqua.
              </p>
              <Button size="massive">Learn More</Button>
            </div>
            <div className="banner">
              <Image src={"./image/bike.png"} size="big" />
            </div>
          </div>
        </div>

        <div className="what">
          <What />
        </div>
        <div className="why">
          <Why />
        </div>
      </React.Fragment>
    );
  }
}

export default Groodd;
