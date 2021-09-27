import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.gradient};
    padding: 7px 0;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;
