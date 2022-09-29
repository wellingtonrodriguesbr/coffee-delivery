import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 16rem;
  width: 100%;
  max-height: 19.375rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 0 20px 20px;

  img {
    margin-top: -20px;
  }

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 12px;

  p {
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 4px 8px;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.625rem;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;

  p {
    span {
      font-family: "Baloo 2";
      font-size: 1.5rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const CartButton = styled.div`
  display: flex;
  gap: 8px;
`;
