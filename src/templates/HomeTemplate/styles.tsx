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
        margin-bottom: 0;
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

  button {
    margin-top: 10px;
    padding: 5px 20px;
    font-weight: 600;
    font-family: "poppins", "arial";
    border-radius: 5px;
    border: 0;
    background: #5f7db3;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
  }
`;

export const LocaleContent = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.darkGray};
    }

    img {
      max-width: 380px;
      vertical-align: middle;
      border-radius: 5px;
      margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
      img {
        max-width: 100%;
      }
    }
  `}
`;
