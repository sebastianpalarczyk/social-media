import styled, { css } from "styled-components";

export const Container = styled.main`
   margin: 0;
   padding: 0;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;

   ${({ primary }) => primary && css`
    background-color: ${({ theme }) => theme.color.grey};
    `}
`;