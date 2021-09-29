import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;

    small {
      color: ${theme.colors.darkGray};
    }
  `}
`;

export const CardsSection = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    padding: 7rem 0;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 0;
    }
    @media screen and (max-width: 580px) {
      padding: 0rem 0 7rem 0;
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;
