import React from "react";
import styled from "styled-components";

function Input({ placeholder, type, className, value, onChange }) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default Input;
