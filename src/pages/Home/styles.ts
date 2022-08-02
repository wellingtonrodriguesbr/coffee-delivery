import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  padding: 5.75rem 0;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    line-height: 130%;
    margin-top: 1rem;
  }
`;

export const ItemsDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.25rem;
  row-gap: 1.25rem;
  column-gap: 2.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
