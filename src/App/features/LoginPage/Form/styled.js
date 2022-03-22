import styled from "styled-components";
import theme from "../../../theme";

export const Form = styled.form`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill);
    background-color: ${({theme}) => theme.color.white};
    border-radius: 6px;
    max-width: 400px;
    border: solid 1px ${({theme}) => theme.color.grey};
`;

export const Input = styled.input`
    font-size: 17px;
    border: solid 1px ${({theme}) => theme.color.grey};
    border-radius: 6px;
    background: none; 
    color: ${({theme}) => theme.color.grey};
    padding: 15px;
    margin: 10px;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.color.blue};
    margin: 10px;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    padding: 0 16px;
    cursor: pointer;
    color: ${({theme}) => theme.color.white};
`;

export const Span = styled.span`
    margin: 10px;
    padding: 15px;
    border-bottom: solid 1px ${({theme}) => theme.color.grey};
    text-align: center;
    color: ${({theme}) => theme.color.blue};
`;
