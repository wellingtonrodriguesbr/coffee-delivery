import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 80px;
`;

export const SuccessMessage = styled.div`
  h3 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 2rem;
    font-weight: 900;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 8.25rem 2.5rem 2.5rem;
  margin-top: 40px;
  border: 1px solid transparent;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
`;

export const DeliveryDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }

  strong {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: bold;
    line-height: 130%;
    display: block;
    color: ${(props) => props.theme["base-text"]};
  }
`;
