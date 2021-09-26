import styled, { css } from "styled-components";
import { BreadCrumbProps } from "../BreadCrumb";
type ActiveProps = Pick<BreadCrumbProps, "active">;

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
    }

    li + li {
      margin-left: 20px;
    }

    @media screen and (max-width: 768px) {
      ul {
        flex-direction: column;
        position: absolute;
        left: -100rem;
        top: 0;

        background-color: red;
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.5s;
      }

      li + li {
        margin-left: 0;
      }

      &.active {
        ul {
          left: 0;
        }
      }
    }
  `}
`;

export const Li = styled.li<ActiveProps>`
  ${({ theme, active }) => css`
    list-style: none;

    a {
      text-decoration: none;
      color: ${active ? theme.colors.primary : theme.colors.white};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`;
