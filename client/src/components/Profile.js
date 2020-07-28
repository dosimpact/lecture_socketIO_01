import React from "react";
import styled from "styled-components";

function Profile({ name, img, className, children }) {
  return (
    <Wrapper className={className}>
      <Circle img={img}></Circle>
      <Name>{name}</Name>
      {children}
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => `url(${props.img})`} no-repeat center;
  background-size: cover;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-left: 5px;
`;
