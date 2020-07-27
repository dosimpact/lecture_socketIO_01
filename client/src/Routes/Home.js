import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div>
        <h2>Home.js</h2>
        <div>
          <h2>Set Profile</h2>
          <form>
            <input
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              placeholder="room"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            ></input>
            <Link
              onClick={(e) => (!room || !name ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button type="submit">Join DOS-chat 🤦‍♀️</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
