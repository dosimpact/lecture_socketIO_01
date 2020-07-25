import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket;
function Chat() {
  const END_POINT = "http://localhost:4000/";
  useEffect(() => {
    socket = io(END_POINT);
  }, []);

  return <div>Chat.js</div>;
}

export default Chat;
