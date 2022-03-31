import styled from "styled-components";


export const Container = styled.div`
    margin-bottom: 15px;
`;

export const Header = styled.div`
    background-color: ${({theme}) => theme.color.darkGrey};
    margin: 0 20px;
    padding: 30px;
    border-radius: 15px 15px 0 0;
`;

export const Comment = styled.div`
    padding: 30px;
    margin: 0 20px;
    background-color: ${({theme}) => theme.color.darkGrey};
    border-radius: 0 0 15px 15px;
`;

export const File = styled.img`
    margin: 0 20px;
`;