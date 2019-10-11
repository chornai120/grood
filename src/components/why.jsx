import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
class Why extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="whygrood">
          <div className="title">
            <h1 className="titlesize">
              Why's <span className="hh2"> Grood</span>
              <span> ?</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do
              eiusmod tempor
            </p>
            <p className="paragrap">
              incidicunt ut labore et
              <span className="hh2"> dolore magna aliqua</span>
            </p>
          </div>
          <div className="mygrid">
            <Grid container columns={3}>
              <Grid.Column>
                <Image src="./image/bike-b.png" size="tiny" centered />

                <h1 className="eco">Bold Italic 36pt</h1>
                <p>Lorem ipsum elit adipiscing elit,</p>
                <p className="paragrap"> incididunt ut labor lorem</p>
                <p className="paragrap">ipsum dolor sit amet</p>
              </Grid.Column>
              <Grid.Column>
                <img src="./image/battery.png" alt="" />
                <h1 className="eco">ECO Friendly</h1>
                <p>Lorem ipsum elit adipiscing elit,</p>
                <p className="paragrap"> incididunt ut labor lorem</p>
                <p className="paragrap">ipsum dolor sit amet</p>
              </Grid.Column>
              <Grid.Column>
                <img src="./image/spped.png" alt="" />
                <h1 className="eco">ECO Friendly</h1>
                <p>Lorem ipsum elit adipiscing elit,</p>
                <p className="paragrap"> incididunt ut labor lorem</p>
                <p className="paragrap">ipsum dolor sit amet</p>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Why;
