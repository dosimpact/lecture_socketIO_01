import React, { useEffect, useState } from "react";
import queryString from "query-string";
import SocketIO from "socket.io-client";

let socket;

function Chat({ location, history }) {
  const END_POINT = "http://localhost:4000/";
  const { name, room } = queryString.parse(location.search);
  const [send, setSend] = useState("");
  const [msg, setMsg] = useState([]);
  const [users, setUsers] = useState([]);
  const [isConnect, SetIsConnect] = useState(false);

  useEffect(() => {
    socket = SocketIO(END_POINT);
    socket.emit("join", { name, room }, (e) => {
      if (e) {
        console.error("join Fail", e);
        alert(e);
        history.push("/");
      }
      console.log("join complete");
      SetIsConnect(true);
    });
    return () => {
      socket.emit("disconnect");
      SetIsConnect(false);
    };
  }, [location, END_POINT]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMsg((prev) => [...prev, msg]);
    });

    socket.on("roomData", (payload) => {
      setUsers(payload.users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (send) {
      socket.emit("sendMessage", { text: send }, (e) => {
        if (e) console.log("sendMessage Fail");
      });
    }
    setSend("");
  };

  return (
    <>
      <div>
        <h2>Dos - Chat</h2>
        {isConnect ? "connect" : "connecting..."}
      </div>
      <div>
        <h2> Msg - </h2>
        <div>
          <ul>
            {msg &&
              msg.map((e, idx) => (
                <li key={idx}>
                  {e.user} | {e.text}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div>
        <h2> Type Msg</h2>
        <form>
          <input
            placeholder="send message"
            type="text"
            value={send}
            onChange={(e) => setSend(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          ></input>
          <button type="submit" onClick={(e) => sendMessage(e)}>
            SEND
          </button>
        </form>
      </div>

      <div>
        <h2>current User</h2>
        <div>
          <ul>{users && users.map((e, idx) => <li key={idx}>{e.name}</li>)}</ul>
        </div>
      </div>
    </>
  );
}

export default Chat;
