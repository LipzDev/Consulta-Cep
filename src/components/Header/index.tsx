import React, { useState } from "react";
import { Container } from "../Container/styles";
import Logo from "../Logo";
import Menu from "../Menu";
import IconMenu from "../IconMenu";
import * as Styles from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styles.Header expanded={isOpen}>
      <Container>
        <Styles.Content>
          <Logo />
          <Menu expanded={isOpen} />
          <IconMenu onClick={() => setIsOpen(!isOpen)} expanded={isOpen} />
        </Styles.Content>
      </Container>
    </Styles.Header>
  );
};

export default Header;
