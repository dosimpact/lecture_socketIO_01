import React from "react";

import styled from "styled-components";

function Message({ text, user, profile, className, me }) {
  return (
    <Container me={me} className={className}>
      <Wrapper>
        <Circle className="msg__item" img={profile}></Circle>
        <div>
          <div className="msg__item title"> {user}</div>
          <div
            me={me}
            className={`msg__item ${me ? "content__me" : "content"}`}
          >
            {text}
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Message;

const Container = styled.li`
  align-self: ${(props) => (props.me ? "flex-end" : "flex-start")};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  & .title {
    opacity: 0.8;
    font-size: 12px;
    margin: 5px;
  }

  & .content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    background-color: ${(props) => props.theme.lightGreyColor};
    border-radius: 10px;
    height: 35px;
  }

  & .content__me {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    background-color: ${(props) => props.theme.blueColor};
    color: ${(props) => props.theme.bgColor};
    border-radius: 10px;
    height: 35px;
    justify-self: flex-end;
  }
  & .msg__item {
    margin: 0px 4px;
  }
`;

const Circle = styled.div`
  width: 28px;
  height: 28px;
  background: ${(props) => `url(${props.img})`} no-repeat center;
  background-size: cover;
  border-radius: 50%;
`;
