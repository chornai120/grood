import React, { Component } from "react";
import { Form, TextArea } from "semantic-ui-react";
class PreOrder extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      emailaddress: "",
      phonenumber: ""
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="Header ">
        <center>
          <br></br>
          <h1 className="order">Pre-Order Form</h1>
          <form class="ui form segment" onSubmit={this.handleSubmit}>
            <div class="two fields">
              <div class="field">
                <input
                  placeholder="First Name"
                  name="firstname"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
              </div>
              <div class="field">
                <input
                  placeholder="Last Name"
                  name="lastname"
                  type="text"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div class="two fields">
              <div class="field">
                <input
                  placeholder="Email Address"
                  type="email"
                  name="emailaddress"
                  value={this.state.emailaddress}
                  onChange={this.handleChange}
                />
              </div>

              <div class="field">
                <input
                  placeholder="Phone Number"
                  type="text"
                  name="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              placeholder="Email Address"
            />
            <div class="ui primary submit button">Submit Now</div>
          </form>
        </center>

        <br />
        <div className="footer">
          <div className="ride">
            <div>
              <img className="grood" src="./image/grood-w.png" alt="" />
            </div>
            <div className="under_footer">
              <h3>
                Make with <i class="fas fa-heart"></i> by SmallWorld venture
              </h3>
              <h4 className="copyright">&#169; 2019 All Rights Reserved</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreOrder;
