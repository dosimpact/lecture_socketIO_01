import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <h1>Home</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        ></input>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit">Chat now!</button>
        </Link>
      </form>
    </>
  );
}

export default Home;
