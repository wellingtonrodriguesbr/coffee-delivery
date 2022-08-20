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

export const CoffeesSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
  }
`;
