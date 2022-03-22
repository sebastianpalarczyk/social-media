import styled, {css} from "styled-components";

export const Form = styled.form`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill);
    background-color: ${({theme}) => theme.color.white};
    border-radius: 6px;
    max-width: 400px;
    border: solid 1px ${({theme}) => theme.color.alto};
    box-shadow: 0 0 5px ${({theme}) => theme.color.alto};
`;

export const Input = styled.input`
    font-size: 17px;
    border: solid 1px ${({theme}) => theme.color.alto};
    border-radius: 6px;
    background: none; 
    color: ${({theme}) => theme.color.alto};
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

    ${({ primary }) => primary && css`
    background: ${({theme}) => theme.color.green};
    `}
`;

export const Span = styled.span`
    margin: 10px;
    padding: 15px;
    border-bottom: solid 1px ${({theme}) => theme.color.alto};
    text-align: center;
    color: ${({theme}) => theme.color.blue};
`;
