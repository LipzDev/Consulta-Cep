import React from "react";
import * as Styles from "../Menu/styles";
import { IconMenuProps } from "../IconMenu/index";

const Menu = ({ expanded }: IconMenuProps) => {
  return (
    <Styles.Nav className={expanded ? "active" : ""}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </Styles.Nav>
  );
};

export default Menu;
