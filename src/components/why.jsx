import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
class Why extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="detail_about_grood">
          <div className="title">
            <h1 className="titlesize">
              Why's <span className="style_paragrap"> Grood</span>
              <span> ?</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do
              eiusmod tempor
            </p>
            <p className="paragrap">
              incidicunt ut labore et
              <span className="style_paragrap"> dolore magna aliqua</span>
            </p>
          </div>
          <div className="my_grid">
            <Grid container columns={3}>
              <Grid.Column>
                <Image src="./image/bike-b.png" size="tiny" centered />
                <h1 className="item">Bold </h1>
                <p>Lorem ipsum elit adipiscing elit,</p>
                <p className="paragrap"> incididunt ut labor lorem</p>
                <p className="paragrap">ipsum dolor sit amet</p>
              </Grid.Column>
              <Grid.Column>
                <Image src="./image/battery.png" size="tiny" centered />
                <h1 className="item">ECO Friendly</h1>
                <p>Lorem ipsum elit adipiscing elit,</p>
                <p className="paragrap"> incididunt ut labor lorem</p>
                <p className="paragrap">ipsum dolor sit amet</p>
              </Grid.Column>
              <Grid.Column>
                <Image src="./image/spped.png" size="tiny" centered />
                <h1 className="item">ECO Friendly</h1>
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
