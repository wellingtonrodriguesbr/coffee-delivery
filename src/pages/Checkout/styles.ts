import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  gap: 2rem;
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

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;

  input {
    width: 100%;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    padding: 0.75rem;
    border-radius: 4px;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      outline: 0;
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }

  input:nth-child(1) {
    grid-column: 1 / 2;
  }
  input:nth-child(2) {
    grid-column: 1 / 6;
  }
  input:nth-child(3) {
    grid-column: 1 / 2;
  }
  input:nth-child(4) {
    grid-column: 2 / 6;
  }
  input:nth-child(5) {
    grid-column: 1 / 2;
  }
  input:nth-child(6) {
    grid-column: 2 / 5;
  }
  input:nth-child(7) {
    max-width: 60px;
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

export const CoffeesSelectedContent = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  /* button {
    width: 100%;
    background-color: ${(props) => props.theme.yellow};
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    border: none;
    font-weight: bold;
    color: #fff;
    border-radius: 6px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  } */
`;

export const CoffeesSelected = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  p {
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
  }
`;

export const Coffee = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  div {
    h5 {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const CoffeesPriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;

      &:last-child {
        font-size: 1rem;
      }
    }

    h4 {
      font-size: 1.25rem;
      font-family: "Roboto";
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
