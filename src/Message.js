import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./Message.css";

const Message = forwardRef(({ message, userName }, ref) => {
  console.log(message, "message");
  const isUser = userName === message.username;
  console.log(isUser, "isUser");
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__usercard" : "message__postcard"}>
        <CardContent>
          <Typography color="inherit" variant="h5" component="h2">
            {!isUser && `${message.username || 'Unknown user'}: `}{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
