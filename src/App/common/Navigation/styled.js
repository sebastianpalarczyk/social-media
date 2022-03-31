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

export const Label = styled.label`
    display: block;
    display: flex;
    justify-content: center;
    margin: 0px 10px;
`;

export const Item = styled.li`
    margin: 10px;
    font-size: 30px;
    padding: 5px;

    &:hover{
        background-color: ${({theme}) => theme.color.darkGrey};
        border-radius: 6px;
    }
`;

export const RightLabel = styled(Label)`
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


