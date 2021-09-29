import styled, { css } from "styled-components";
import { ButtonProps } from "./index";

type ButtonPropsStyle = Pick<ButtonProps, "actived">;

export const Button = styled.button<ButtonPropsStyle>`
  ${({ theme, actived }) => css`
    background: ${actived ? "#ccc" : theme.colors.primary};
    border-radius: 5px;
    padding: 7px 20px;
    border: none;
    margin: 10px 0 30px 0;
    font-family: "poppins";
    font-weight: 600;
    letter-spacing: 1px;
    color: ${actived ? theme.colors.darkGray : theme.colors.white};
    cursor: ${actived ? "no-drop" : "pointer"};
  `}
`;
