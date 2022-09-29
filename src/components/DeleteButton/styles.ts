import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 8px;
  gap: 4px;
  border: none;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
  }
`;
