import styled from "styled-components";

interface ButtonCartProps {
  background: "purple-dark" | "yellow-light";
  color: "white" | "yellow-dark";
}

export const ButtonCart = styled.button<ButtonCartProps>`
  background-color: ${(props) => props.theme[props.background]};
  color: ${(props) => props.theme[props.color]};
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    color: #fff;
    background-color: ${(props) =>
      props.background === "yellow-light"
        ? props.theme["yellow-dark"]
        : props.theme.purple};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
