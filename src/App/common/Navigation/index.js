import React from "react";
import { List, Item, Link, Picture, NavigationContainer } from "./styled";
import { ReactComponent as HomepageIcon } from "../../images/homepage.svg";
import { ReactComponent as Groups } from "../../images/groups.svg";
import { ReactComponent as Watch } from "../../images/watch.svg";
import { ReactComponent as MarketPlace } from "../../images/marketplace.svg";
import {ReactComponent as Menu} from "../../images/menu.svg";
import {ReactComponent as Flag} from "../../images/flag.svg";
import {ReactComponent as Messages} from "../../images/messages.svg";



const Navigation = () => {
  return (
    <NavigationContainer>
      <List>
        <Item>
          <Link>Logo</Link>
        </Item>
        <Item>
          <Link><HomepageIcon/></Link>
          <Link><Flag/></Link>
          <Link><Watch/></Link>
          <Link><MarketPlace/></Link>
          <Link><Groups/></Link>
        </Item>
        <Item>
          <Link><Menu/></Link>
          <Link><Messages/></Link>
          <Link>Powiadomienia</Link>
          <Link>Konto</Link>
        </Item>
      </List>
    </NavigationContainer>
  )
}

export default Navigation;