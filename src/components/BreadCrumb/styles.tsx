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

      :hover {
        opacity: 0.5;
      }
    }

    a + a {
      margin-left: 10px;
    }
  `}
`;
