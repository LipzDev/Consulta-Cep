import styled, { css } from "styled-components";
import { BreadCrumbProps } from "./index";
type ActiveProps = Pick<BreadCrumbProps, "active">;

export const BreadCrumb = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 20px;

    margin-bottom: 30px;

    a {
      text-decoration: none;
      color: ${theme.colors.darkGray};
      margin-right: 10px;
      transition: 0.3s;

      :hover {
        color: ${theme.colors.primary};
      }
    }

    a + a {
      margin-left: 10px;
    }
  `}
`;
