import styled, { css } from "styled-components";

export const Icon = styled.div`
  ${({ theme }) => css`
    z-index: 9999;
    position: relative;
    cursor: pointer;
    border-radius: 5px;

    span {
      display: block;
    }

    .icon-1 {
      width: 25px;
      height: 2px;
      background-color: ${theme.colors.secondary};
      transition: 0.5s;
    }
    .icon-2 {
      width: 25px;
      height: 2px;
      background-color: ${theme.colors.secondary};
      transition: 0.5s;
      margin: 5px 0;
      opacity: 1;
    }
    .icon-3 {
      width: 25px;
      height: 2px;
      background-color: ${theme.colors.secondary};
      transition: 0.5s;
    }

    &.active {
      .icon-1 {
        transform: rotate(45deg) translate(5px, 4px);
      }
      .icon-2 {
        opacity: 0;
      }
      .icon-3 {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  `}
`;
