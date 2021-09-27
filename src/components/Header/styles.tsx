import styled, { css } from "styled-components";

type HeaderStyleProps = {
  expanded: boolean;
};

export const Header = styled.header<HeaderStyleProps>`
  ${({ theme, expanded }) => css`
    background: ${theme.colors.gradient};
    padding: 7px 0;
    width: 100%;
    top: 0;
    position: ${expanded ? "fixed" : "initial"};
    z-index: 999;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;
