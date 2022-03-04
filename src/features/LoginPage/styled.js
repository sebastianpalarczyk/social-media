import styled from "styled-components";

export const Main = styled.main`
    background-color: ${({theme}) => theme.color.white};
    color: ${({theme}) => theme.color.black};
    margin: 100px;
`;