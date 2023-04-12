import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  background: #000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 2px solid black;
    background: #fff;
    color: #000;
  }
`;
