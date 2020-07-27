import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookMessenger } from "react-icons/fa";
import Input from "../components/Input";

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [profile, setProfile] = useState("");

  return (
    <Container>
      <Wrapper>
        <div className="main">
          <FaFacebookMessenger className="main__logo" />
          <div className="main__title">Chat with your Friends</div>
        </div>

        <div className="profile">
          <h2 className="profile__title">Set Profile</h2>
          <form className="profile__from">
            <Input
              className="profile__input"
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              className="profile__input"
              placeholder="room"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <Link
              className="profile__button"
              onClick={(e) => (!room || !name ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button type="submit">Join DOS-chat 🤦‍♀️</button>
            </Link>
          </form>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .main__logo {
    cursor: pointer;
    font-size: 120px;
    color: ${(props) => props.theme.blueColor};
  }
  & .main__title {
    font-size: 70px;
    font-weight: bold;
    text-align: center;
  }
`;
