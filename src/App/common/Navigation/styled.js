import styled from "styled-components";

export const NavigationContainer = styled.nav`
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.color.grey};
    flex-basis: 1800px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 700px 1fr;
    margin: 0;
    padding: 0;
    border-bottom: solid white 2px;
    list-style: none;
`;

export const Item = styled.li`
    margin: 10px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    border: solid white;
`;

export const RightItem = styled(Item)`
    justify-content: right;
`;

export const Link = styled.span`
    margin: 10px 55px;
    cursor: pointer;
    flex-grow: 1;

    @media (max-width: 1400px){
        margin: 10px 44px;
    }
`;

export const RightLink = styled(Link)`
    margin: 10px;
`;

export const LeftLink = styled(Link)`
    margin: 10px;
`;


