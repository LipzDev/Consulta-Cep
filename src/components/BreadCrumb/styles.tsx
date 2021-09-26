import styled, { css } from "styled-components";
import { BreadCrumbProps } from "./index";
type ActiveProps = Pick<BreadCrumbProps, "active">;

export const BreadCrumb = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    div {
      margin-left: 5px;
      margin-right: 5px;
    }
  `}
`;

export const Li = styled.li<ActiveProps>`
  ${({ theme, active }) => css`
    list-style: none;

    a {
      text-decoration: none;
      color: ${active ? "blue" : "black"};
    }
  `}
`;
