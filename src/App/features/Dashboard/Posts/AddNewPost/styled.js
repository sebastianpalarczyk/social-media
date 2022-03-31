import styled from "styled-components";

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.color.darkGrey};
   margin: 20px;
   padding: 20px;
   border-radius: 15px;
`;

export const Input = styled.input`
   margin: 15px;
   cursor: pointer;
`;

export const InputPost = styled.input`
   padding: 15px;
   margin: 15px;
   flex-basis: 100%;
   background-color: ${({ theme }) => theme.color.lightGrey};
   border-radius: 15px;
   border: none;
   font-size: 20px;
   color: ${({ theme }) => theme.color.white};
   cursor: pointer;
   ::placeholder{
      color: ${({ theme }) => theme.color.white};
   }

   &:active{
      border-color: ${({ theme }) => theme.color.lightGrey};
   }
`;

export const Button = styled.button`
   padding: 20px;
   margin: 15px;
   border-radius: 15px;
   border: none;
   cursor: pointer;
`;