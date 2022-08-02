import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 1rem;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShoppingCar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ButtonAddress = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border: none;
  padding: 10px 8px;
  font-size: 1rem;
  border-radius: 6px;
`;
export const ButtonCart = styled.button`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
`;
