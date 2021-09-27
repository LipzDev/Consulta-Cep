import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.gradient};
    width: 100%;
    position: fixed;
    bottom: 0;
    a {
      color: ${theme.colors.white};
      text-decoration: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
