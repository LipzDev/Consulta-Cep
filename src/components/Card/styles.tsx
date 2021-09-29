import styled, { css } from "styled-components";

export const Box = styled.div`
  ${({ theme }) => css`
    border-radius: 5px;
    box-shadow: 2px 2px 12px #e8e8e8;
    background: white;
    min-height: 380px;
    position: relative;

    iframe {
      max-width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: 0;
      min-height: 220px;
    }

    p {
      color: ${theme.colors.darkGray};
      margin-left: 15px;
    }

    div {
      min-height: 170px;

      button {
        margin-left: 15px;
        position: absolute;
        bottom: 15px;
        margin-top: 5px;
        border-radius: 5px;
        padding: 7px 20px;
        border: none;
        font-family: "poppins";
        font-weight: 600;
        letter-spacing: 1px;
        background: ${theme.colors.dangerLight};
        color: white;
        cursor: pointer;
      }
    }
  `}
`;
