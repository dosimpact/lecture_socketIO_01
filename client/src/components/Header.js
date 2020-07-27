import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaSearch,
  FaHome,
  FaTv,
  FaUserFriends,
  FaThLarge,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaEllipsisV,
} from "react-icons/fa";
export default () => {
  return (
    <Header>
      <div className="header__container">
        <div className="header__column">
          <FaFacebook className="main__logo" />
          <div className="circle">
            <FaSearch className="main__logo" />
          </div>
        </div>
        <div className="header__column nav__column">
          <FaHome className="nav__logo" />
          <FaTv className="nav__logo" />
          <FaUserFriends className="nav__logo" />
          <FaThLarge className="nav__logo" />
        </div>
        <div className="header__column">
          <div className="circle">
            <FaPlus className="sub__logo" />
          </div>
          <div className="circle">
            <FaFacebookMessenger className="sub__logo" />
          </div>
          <div className="circle">
            <FaBell className="sub__logo" />
          </div>
          <div className="circle">
            <FaEllipsisV className="sub__logo" />
          </div>
        </div>
      </div>
    </Header>
  );
};

const Header = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: ${(props) => props.theme.boxShadow};

  & .header__container {
    background: ${(props) => props.theme.bgColor};
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .header__column {
    padding: 0px 20px;
    display: flex;
    align-items: center;
  }

  & .nav__column {
    width: 40vw;
    display: flex;
    justify-content: space-between;
  }

  & .main__logo {
    cursor: pointer;
    margin: 0px 5px;
    font-size: 40px;
    color: ${(props) => props.theme.blueColor};
    &:last-child {
      font-size: 20px;
      color: ${(props) => props.theme.darkGreyColor};
    }
  }
  & .nav__logo {
    cursor: pointer;
    font-size: 30px;
    color: ${(props) => props.theme.darkGreyColor};
  }
  & .sub__logo {
    cursor: pointer;
    font-size: 20px;
    color: ${(props) => props.theme.blackColor};
  }

  & .circle {
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.lightGreyColor};
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;
