import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  position: relative;

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 4px 8px;
    border-radius: 20px;
  }
`;
