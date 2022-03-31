import React from "react";
import { List, Item, RightLabel, Link, RightLink, LeftLink, NavigationContainer, Label } from "./styled";
import { ReactComponent as HomepageIcon } from "../../images/homepage.svg";
import { ReactComponent as Groups } from "../../images/groups.svg";
import { ReactComponent as Watch } from "../../images/watch.svg";
import { ReactComponent as MarketPlace } from "../../images/marketplace.svg";
import { ReactComponent as Menu } from "../../images/menu.svg";
import { ReactComponent as Flag } from "../../images/flag.svg";
import { ReactComponent as Messages } from "../../images/messages.svg";
import { ReactComponent as Notifications } from "../../images/notifications.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Account } from "../../images/account.svg";

const Navigation = () => {
  return (
    <NavigationContainer>
      <List>
        <Label>
          <LeftLink><Logo /></LeftLink>
        </Label>
        <Label>
          <Item>
            <Link><HomepageIcon /></Link>
          </Item>
          <Item>
            <Link><Flag /></Link>
          </Item>
          <Item>
            <Link><Watch /></Link>
          </Item>
          <Item>
            <Link><MarketPlace /></Link>
          </Item>
          <Item>
            <Link><Groups /></Link>
          </Item>
        </Label>
        <RightLabel>
          <Item>
            <RightLink><Menu /></RightLink>
          </Item>
          <Item>
            <RightLink><Messages /></RightLink>
          </Item>
          <Item>
            <RightLink><Notifications /></RightLink>
          </Item>
          <Item>
            <RightLink><Account /></RightLink>
          </Item>
        </RightLabel>
      </List>
    </NavigationContainer>
  )
}

export default Navigation;