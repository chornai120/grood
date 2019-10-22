import React, { Component } from "react";
import { Button, Image, Icon } from "semantic-ui-react";
import { ScrollTo } from "react-scroll-to";
import What from "./what";
import Why from "./why";
import PreOrder from "./preorder";
import { Link } from "react-scroll";
import Side from "./dropdown";
class Groodd extends Component {
  state = {};
  handleShow = event => {};
  handleClick = e => {
    this.setState({
      activeSection: e.target.id
    });

    window.scrollTo({
      top: 2355,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="head">
          <div className="tol_bar">
            <div className="logo">
              <Image src={"./image/grood-w.png"} size="tiny" />
            </div>
            <div className="group_btn">
              <Button icon onClick={this.handleShow}>
                <Icon name="align justify" />
              </Button>
            </div>
            <div className="list_menu">
              <ul className="style">
                <li className="menu">
                  <Link
                    activeClass="active"
                    to="about_grood"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                  >
                    What's Grood?
                  </Link>
                </li>
                <li className="menu">
                  <Link
                    activeClass="active"
                    to="grood_detail"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    For Better World!
                  </Link>
                </li>
                <li className="list_btn">
                  <ScrollTo>
                    {({ scrollTo }) => (
                      <Button onClick={this.handleClick}>Pre-Order Now</Button>
                    )}
                  </ScrollTo>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grood_bike">
          <div className="slide">
            <Side />
          </div>
          <div className="grid_grood_bike">
            <div className="title_grood">
              <div className="banner">
                <h2 className="ride_for">Ride Grood for: </h2>
                <h1 className="better">Better world 100pt</h1>
                <div className="lorem">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button size="massive">Learn More</Button>
                </div>
              </div>
            </div>
            <div className="grood_img">
              <div className="banner">
                <Image src={"./image/bike.png"} size="big" />
              </div>
            </div>
          </div>
        </div>

        <div className="about_grood">
          <What />
        </div>
        <div className="grood_detail">
          <Why />
        </div>
        <div className="pre_order">
          <PreOrder />
        </div>
      </React.Fragment>
    );
  }
}

export default Groodd;
