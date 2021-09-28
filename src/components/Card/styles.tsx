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
    }

    p {
      color: ${theme.colors.darkGray};
    }

    div {
      margin-left: 15px;
      min-height: 170px;

      button {
        position: absolute;
        bottom: 15px;
        margin-top: 5px;
        padding: 5px 20px;
        font-weight: 600;
        font-family: "poppins", "arial";
        border-radius: 5px;
        border: 0;
        background: ${theme.colors.dangerLight};
        letter-spacing: 1px;
        color: white;
        cursor: pointer;
      }
    }
  `}
`;
