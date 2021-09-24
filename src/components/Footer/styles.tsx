import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
