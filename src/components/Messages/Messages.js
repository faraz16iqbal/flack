import React, { Component } from "react";
import { Segment, Comment } from "semantic-ui-react";
import firebase from "../../firebase";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";

class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
  };
  render() {
    const { messagesRef } = this.state;
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">{/* {Messages} */}</Comment.Group>
        </Segment>

        <MessageForm messages={messagesRef} />
      </React.Fragment>
    );
  }
}

export default Messages;
