import React, { useState, useEffect } from "react";
import queryString from "query-string";
import socketIO from "socket.io-client";

let socket;

function Chat({ location, history }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const END_POINT = "http://localhost:4000/";

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let { name, room } = queryString.parse(location.search);
    if (!name || !room) history.push("/");
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    setName(name);
    setName(room);
    socket = socketIO(END_POINT);

    socket.emit("join", { name, room }, (e) => {
      alert(e);
    });

    return () => {
      socket.on("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessages((prev) => [...prev, message]);
    });
    socket.on("roomDate", (payload) => {
      console.log("roomDate", payload);
      setUsers((prev) => payload.users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { text: message }, (e) => {
        if (e) {
          console.error(e);
        }
        setMessage("");
      });
    }
  };

  return (
    <>
      <h1>Chat.js</h1>
      <form>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        ></input>
        <button onClick={(e) => sendMessage(e)} type="submit">
          Send Message
        </button>
      </form>
      <div>
        <h1>Messages</h1>
        <div>
          {messages.map((m) => (
            <div>
              {m.user} | {m.text}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Users</h1>
        <div>
          {users.map((u) => (
            <div>{u.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chat;
