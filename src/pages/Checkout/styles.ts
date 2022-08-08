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
`;

export const Summary = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

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
