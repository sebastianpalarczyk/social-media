import React from "react";
import { List, Item, Link, Picture, NavigationContainer } from "./styled";
import { ReactComponent as HomepageIcon } from "../../images/home-page.svg";

const Navigation = () => {
  return (
    <NavigationContainer>
      <List>
        <Item>
          <Link>Logo</Link>
        </Item>
        <Item>
          <Link><HomepageIcon/></Link>
          <Link>Strony</Link>
          <Link>Watch</Link>
          <Link>MarketPlace</Link>
          <Link>Gry</Link>
        </Item>
        <Item>
          <Link>Menu</Link>
          <Link>Wiadomości</Link>
          <Link>Powiadomienia</Link>
          <Link>Konto</Link>
        </Item>
      </List>
    </NavigationContainer>
  )
}

export default Navigation;