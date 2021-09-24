import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
    }

    li {
      list-style: none;
    }

    li + li {
      margin-left: 20px;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primaryLight};
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

      a {
        color: ${theme.colors.primaryLight};
      }

      &.active {
        ul {
          left: 0;
        }
      }
    }
  `}
`;
