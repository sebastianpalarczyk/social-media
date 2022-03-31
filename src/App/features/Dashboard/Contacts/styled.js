import styled from "styled-components";

export const Container = styled.div`
    border: solid white;
`;

export const Header = styled.h4`
    color: ${({ theme }) => theme.color.white};
`;

export const List = styled.ul`
    font-size: 15px;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    color: ${({ theme }) => theme.color.white};
    padding: 5px;

    &:hover{
        background-color: ${({theme}) => theme.color.darkGrey};
        border-radius: 6px;
    }
`;