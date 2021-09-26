import React from "react";
import * as Styles from "../Menu/styles";
import Link from "next/link";
import { IconMenuProps } from "../IconMenu/index";
import { useRouter } from "next/router";

const Menu = ({ expanded }: IconMenuProps) => {
  const { pathname } = useRouter();

  return (
    <Styles.Nav className={expanded ? "active" : ""}>
      <ul>
        <Styles.Li active={pathname === "/"}>
          <Link href="/">Início</Link>
        </Styles.Li>
        <Styles.Li active={pathname === "/favoritos"}>
          <Link href="/favoritos">Favoritos</Link>
        </Styles.Li>
      </ul>
    </Styles.Nav>
  );
};

export default Menu;
