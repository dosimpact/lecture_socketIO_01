import React, { useEffect } from "react";
import queryString from "query-string";
import SocketIO from "socket.io-client";

const END_POINT = "http://localhost:4000/";

function Chat({ location, history }) {
  let socket;
  const { name, room } = queryString.parse(location.search);

  useEffect(() => {
    socket = SocketIO(END_POINT);
    return () => {
      socket.emit("disconnect");
    };
  }, []);

  useEffect(() => {
    socket.on("message", () => {
      console.log(`Server is message`);
    });

    socket.on("roomData", () => {
      console.log(`Server is roomData`);
    });
  }, []);

  const sendMessage = () => {};

  return (
    <>
      <div>
        <h2>Dos - Chat</h2>
      </div>
    </>
  );
}

export default Chat;
