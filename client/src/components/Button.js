import React from "react";
import styled from "styled-components";

function Input({ placeholder, type, className, value, onChange, children }) {
  return (
    <SButton
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    >
      {children}
    </SButton>
  );
}

export default Input;

const SButton = styled.button`
  background-color: ${(props) => props.theme.lightGreyColor};
  border-radius: 10px;
  height: 35px;
`;
