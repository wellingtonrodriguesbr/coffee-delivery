import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.125rem;
  }
`;
export const CheckoutForm = styled.form``;

export const CoffeesSelected = styled.div`
  h3 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.125rem;
  }
`;

export const Container = styled.div`
  width: 448px;
  padding: 40px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
  margin-top: 1rem;
`;

export const ItemsSelected = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  h4 {
    font-family: "Roboto";
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
    font-weight: bold;
  }
`;

export const ItemsDescription = styled.div`
  display: flex;

  h3 {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
    font-family: "Roboto";
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 72px;
  height: 32px;
  border-radius: 6px;

  span {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1rem;
  }

  button {
    width: 100%;
    font-size: 0;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`;

export const Summary = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 24px;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }

    h4 {
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  button {
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.yellow};
    color: #fff;
    padding: 12px 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.875rem;
    border-radius: 6px;
    transition: all 0.3s;
    margin-top: 24px;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;
