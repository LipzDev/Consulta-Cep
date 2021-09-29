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
        z-index: 999;
        flex-direction: column;
        position: absolute;
        left: -100rem;
        top: 0;

        background: ${theme.colors.gradient};
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.2s;
      }

      li + li {
        margin-left: 0;
        margin-top: 20px;
      }

      a {
        font-size: 20px;
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
