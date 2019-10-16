import React, { Component } from "react";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.statsRef = React.createRef();
  }
  state = {
    displayDownButton: false,
    displayUpButton: false,
    scrollPosition: 0
  };
  handleScroll = event => {
    this.setState(
      {
        scrollPosition: window.pageYOffset
      },
      this.checkScroll
    );
  };
  handleScrollToStats = () => {
    window.scrollTo({
      top: this.statsRef.current.offsetTop,
      behavior: "smooth"
    });
  };
  checkScroll = () => {
    if (
      this.state.scrollPosition > 0 &&
      this.state.scrollPosition < this.statsRef.current.offsetTop - 500
    ) {
      this.setState({
        displayDownButton: true,
        displayUpButton: false
      });
    } else if (
      this.state.scrollPosition >
      this.statsRef.current.offsetTop - 500
    ) {
      this.setState({
        displayDownButton: false,
        displayUpButton: true
      });
    } else {
      this.setState({
        displayDownButton: false,
        displayUpButton: false
      });
    }
  };
  handleScrollToStats = () => {
    window.scrollTo({
      top: 0
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="mybtn">
          <button onClick={this.handleScrollToStats}>start</button>
          <button onClick={this.handleScrollToList}>stop</button>
        </div>
        <div className="test">
          <h1>djfhedjfdsklfjgjjlkheh</h1>
          <h2>gdfjfjkwfgug eiogdfeu</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Btn;
