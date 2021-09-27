import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
`;

export const CardsSection = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    padding: 7rem 0;
  `}
`;
