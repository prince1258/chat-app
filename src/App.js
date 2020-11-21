import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

import "./App.css";
import MessageComponent from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("message")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("message").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        alt="logo"
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
      />
      <h3>hello {userName}</h3>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input
            className="app_input"
            placeholder="Enter message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app_iconButton"
            variant="outlined"
            color="primary"
            disabled={!input}
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return (
            <MessageComponent key={id} userName={userName} message={message} />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default App;
