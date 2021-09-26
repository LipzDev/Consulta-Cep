import React from "react";
import Link from "next/link";
import * as Styles from "../Logo/styles";

const Logo = () => {
  return (
    <Link href="/">
      <Styles.Logo>
        <img src="../img/logo.png" alt="Logomarca" />
      </Styles.Logo>
    </Link>
  );
};

export default Logo;
