import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <Wrapper>
        <FaFacebookMessenger className="loading__logo" />
        <span className="loading__title">Search...</span>
        <img src="https://media2.giphy.com/media/xGdvlOVSWaDvi/200.gif?cid=ecf05e472v5h8y1xxp8kanvczp4y6488862h5rhnjsb5jmx9&rid=200.gif"></img>
      </Wrapper>
    </Container>
  );
}

export default Loading;
const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .loading__logo {
    cursor: pointer;
    font-size: 120px;
    color: ${(props) => props.theme.blueColor};
  }
  & .loading__title {
    font-size: 60px;
    margin: 20px 0px;
  }
`;
