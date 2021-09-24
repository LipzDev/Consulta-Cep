import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;
  `}
`;
