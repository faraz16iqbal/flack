import React, { Component } from "react";
import { Segment, Button, Input } from "semantic-ui-react";

export default class MessageForm extends Component {
  state = {
    message: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendMessage = () => {
    const { messagesRef } = this.props;
    const { message } = this.state;
    if (message) {
      this.setState({ loading: true });
    }
  };

  render() {
    return (
      <Segment className="message__form">
        <Input
          fluid
          name="message"
          onChange={this.handleChange}
          style={{ marginBottom: "0.7em" }}
          label={<Button icon="add" />}
          labelPosition="left"
          placeholder="Write your message"
        />
        <Button.Group icon widths="2">
          <Button
            onClick={this.sendMessage}
            color="orange"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </Button.Group>
      </Segment>
    );
  }
}
