import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
class Toggle extends Component {
  state = {};
  render() {
    return (
      <Button icon>
        <Icon name="align justify" />
      </Button>
    );
  }
}

export default Toggle;
