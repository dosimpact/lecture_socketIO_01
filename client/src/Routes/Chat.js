import React, { useEffect, useState } from "react";
import queryString from "query-string";
import SocketIO from "socket.io-client";
import styled from "styled-components";

import { FaFacebookMessenger } from "react-icons/fa";

import Loading from "../components/Loading";
import Profile from "../components/Profile";
import ScrollToBottom from "react-scroll-to-bottom";
import Input from "../components/Input";
import Message from "../components/Message";
import Button from "../components/Button";

let socket;

function Chat({ location, history }) {
  const END_POINT = "http://localhost:4000/";
  const { name, room, profile } = queryString.parse(location.search);

  const [send, setSend] = useState("");
  const [msg, setMsg] = useState([]);
  const [users, setUsers] = useState([]);
  const [isConnect, SetIsConnect] = useState(false);

  useEffect(() => {
    socket = SocketIO(END_POINT);
    socket.emit("join", { name, room, profile }, (e) => {
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
      console.log(payload);
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
    <Container>
      <Wrapper>
        <div className="boxshadow">{isConnect ? null : <Loading />}</div>
        <div className="users__container boxshadow">
          <div className="users_wrapper">
            <ul className="users_list">
              {users &&
                users.map((e, idx) => (
                  <Profile
                    className="users_item"
                    key={idx}
                    name={e.name}
                    img={e.profile}
                  />
                ))}
            </ul>
          </div>
        </div>

        <div className="message__container boxshadow">
          <ScrollToBottom className="message_wrapper">
            <ul className="message__list">
              {msg &&
                msg.map((e, idx) => (
                  <Message
                    className="message__item"
                    key={idx}
                    user={e.user}
                    text={e.text}
                    profile={e.profile}
                    me={name === e.user}
                  />
                ))}
            </ul>
          </ScrollToBottom>

          <div className="messageInput__wrapper">
            <FaFacebookMessenger className="main__logo" />
            <form className="messageInput__form">
              <Input
                className="messageInput__main"
                placeholder="send message"
                type="text"
                value={send}
                onChange={(e) => setSend(e.target.value)}
                onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
              ></Input>
              <Button
                className="messageInput__sendBtn"
                type="submit"
                onClick={(e) => sendMessage(e)}
              >
                SEND
              </Button>
            </form>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};

  & .users__container {
    padding: 8px 8px 8px 16px;
  }
  & .boxshadow {
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  & .message__container {
    padding: 8px 8px 8px 16px;
    height: 80vh;
  }
`;

const Wrapper = styled.div`
  max-width: 600px;
  padding-left: 12px;
  width: 100%;
  & .users_list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    & .users_item {
      margin: 0px 5px;
    }
  }

  & .message_wrapper {
    width: 100%;
    height: 95%;
    flex: auto;
    overflow: auto;

    & .message__list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      & .message__item {
        margin: 10px 2px;
      }
    }
  }

  & .messageInput__wrapper {
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & .main__logo {
      cursor: pointer;
      font-size: 40px;
      color: ${(props) => props.theme.blueColor};
    }

    & .messageInput__form {
      min-width: 100px;
      width: 90%;
      display: flex;
      & .messageInput__main {
        max-width: 80%;
        width: 100%;
        padding: 0px 10px;
        margin: 0px 10px;
      }
      & .messageInput__sendBtn {
        min-width: 36px;
      }
    }
  }
`;
