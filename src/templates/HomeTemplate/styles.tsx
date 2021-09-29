import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  height: auto;
  padding-bottom: 8rem;
`;

export const Content = styled.div`
  max-width: 380px;
  margin: 0 auto;
`;

export const CepContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      margin-bottom: 30px;
      font-weight: 300;
      color: ${theme.colors.darkGray};
    }

    small {
      margin-bottom: 3px;
      margin-top: 30px;
      color: ${theme.colors.darkGray};
    }

    img {
      max-width: 100%;
    }

    @media screen and (max-width: 768px) {
      h1 {
        margin-bottom: 30px;
      }
      img {
        margin: 0 auto;
        max-width: 80%;
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;

    input {
      width: 100%;
      padding-left: 10px;
      border-radius: 5px;
      border: 0;
      outline: none;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        -moz-appearance: textfield;
      }
    }

    button {
      width: 60px;
      height: 30px;
      min-height: 100%;
      border: 0;
      border-radius: 5px;
      background: ${theme.colors.primary};

      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      /* left: -10px; */
      cursor: pointer;

      img {
        max-width: 20px;
      }
    }
  `}
`;

export const InfoCep = styled.div`
  margin-top: 20px;
`;

export const LocaleContent = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.darkGray};
    }

    iframe {
      max-width: 380px;
      height: 300px;
      border-radius: 5px;
      border: none;
    }

    @media screen and (max-width: 768px) {
      iframe {
        max-width: 100%;
      }
    }
  `}
`;
