import React from "react";
import styled from "styled-components";

function Input({
  placeholder,
  type,
  className,
  value,
  onChange,
  children,
  onKeyPress,
}) {
  return (
    <SInput
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onKeyPress={onKeyPress}
      onChange={onChange}
    >
      {children}
    </SInput>
  );
}

export default Input;

const SInput = styled.input`
  background-color: ${(props) => props.theme.lightGreyColor};
  border-radius: 10px;
  height: 35px;
`;
