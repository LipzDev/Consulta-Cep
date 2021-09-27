import styled, { css } from "styled-components";
import { BreadCrumbProps } from "./index";
type ActiveProps = Pick<BreadCrumbProps, "active">;

export const BreadCrumb = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 20px;

    div {
      margin-left: 5px;
      margin-right: 5px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
    }
  `}
`;

export const Li = styled.li<ActiveProps>`
  ${({ theme, active }) => css`
    list-style: none;

    a {
      text-decoration: none;
      color: ${active ? theme.colors.primary : "black"};
    }
  `}
`;
