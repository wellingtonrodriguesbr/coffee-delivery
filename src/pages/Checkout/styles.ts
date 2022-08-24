import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const DeliveryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }
`;

export const BaseContainerCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const BaseContainerDescription = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  h4 {
    font-size: 1rem;
    font-family: "Roboto";
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    font-family: "Roboto";
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
    line-height: 130%;
  }
`;

export const RadioButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

interface ButtonSelectedProps {
  selected: boolean | undefined;
}

export const RadioButton = styled.button<ButtonSelectedProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 12px;
  min-width: 178px;
  cursor: pointer;
  height: 51px;
  border-radius: 6px;
  padding: 1rem;
  font-size: 0.75rem;
  font-family: "Roboto";
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  background-color: ${(props) =>
    props.selected ? props.theme["purple-light"] : props.theme["base-button"]};
  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme.purple}`
      : " 1px solid transparent"};
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const CoffeesSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }
`;
