import React from "react";
import { List, Item, Link } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <Link>Logo</Link>
        </Item>
        <Item>
          <Link>Strona główna</Link>
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
    </nav>
  )
}

export default Navigation;