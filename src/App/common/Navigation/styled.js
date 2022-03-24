import styled from "styled-components";

export const NavigationContainer = styled.nav`
    margin: 0;
    padding: 0;
    background-color: ${({theme}) => theme.color.grey};
    flex-basis: 1800px;
`;
export const List = styled.ul`
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    border-bottom: solid white 2px;
    list-style: none;
`;

export const Item = styled.li`
    margin: 10px;
    font-size: 30px;
`;

export const Link = styled.span`
    margin: 10px;
    width: 20px;
    height: 20px;
    stroke: "white";
    cursor: pointer;
`;


