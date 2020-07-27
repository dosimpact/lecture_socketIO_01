import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookMessenger } from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button";

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [profile, setProfile] = useState(
    "https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg"
  );

  return (
    <Container>
      <Wrapper>
        <div className="main">
          <FaFacebookMessenger className="main__logo" />
          <div className="main__title">Chat with your Friends</div>
        </div>

        <div className="profile">
          <h2 className="profile__title"> Profile</h2>
          {profile && <img className="profile__image" src={profile}></img>}
          <form className="profile__form">
            <Input
              className="profile__input"
              placeholder="ProfileImage"
              type="text"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
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
              onClick={(e) => (!room || !name ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}&profile=${profile}`}
            >
              <Button className="profile__button" type="submit">
                <span>
                  Enter Room <FaFacebookMessenger />
                </span>
              </Button>
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
  & .profile {
    width: 100%;
    height: 400px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 7%;
    background-color: ${(props) => props.theme.bgColor};

    & .profile__title {
      font-size: 24px;
      text-align: center;
      margin: 10px 0px;
    }

    & .profile__image {
      background-size: cover;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    & .profile__form {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .profile__input {
        width: 80%;
        margin: 10px 0px;
        padding: 0px 10px;
      }
      & .profile__button {
        width: 50%;
        padding: 0px 10px;
      }
    }
  }
`;
