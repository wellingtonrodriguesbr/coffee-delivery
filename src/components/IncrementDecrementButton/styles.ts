import styled from "styled-components";

interface HeightButtonProps {
  height: string;
}

export const ButtonContainer = styled.div<HeightButtonProps>`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 82px;
  height: ${(props) => props.height};
  padding: 0 8px;
  border-radius: 6px;

  span {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1rem;
  }

  button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;
