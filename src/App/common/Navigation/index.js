import React from "react";
import { List, Item, Link, Picture, NavigationContainer } from "./styled";
import { ReactComponent as HomepageIcon } from "../../images/homepage.svg";
import { ReactComponent as Groups } from "../../images/groups.svg";
import { ReactComponent as Watch } from "../../images/watch.svg";
import { ReactComponent as MarketPlace } from "../../images/marketplace.svg";
import {ReactComponent as Menu} from "../../images/menu.svg";

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
          <Link><Watch/></Link>
          <Link><MarketPlace/></Link>
          <Link><Groups/></Link>
        </Item>
        <Item>
          <Link><Menu/></Link>
          <Link>Wiadomości</Link>
          <Link>Powiadomienia</Link>
          <Link>Konto</Link>
        </Item>
      </List>
    </NavigationContainer>
  )
}

export default Navigation;