import React, { useState, useEffect } from "react";
import queryString from "query-string";
import socketIO from "socket.io-client";

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const END_POINT = "http://localhost:4000/";
  useEffect(() => {
    const data = queryString.parse(location.search);
    setName(data.name.trim().toLowerCase());
    setName(data.room.trim().toLowerCase());
    socket = socketIO(END_POINT);
    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, []);

  return (
    <>
      <h1>Chat.js</h1>
      <div>
        <h1>Messages</h1>
      </div>
      <div>
        <h1>Users</h1>
      </div>
    </>
  );
}

export default Chat;
