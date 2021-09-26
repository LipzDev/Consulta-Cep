import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
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
