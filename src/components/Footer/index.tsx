import React from "react";
import { Container } from "../Container/styles";
import * as Styles from "../Footer/styles";

const Footer = () => {
  return (
    <Styles.Footer>
      <Container>
        <a
          href="https://www.linkedin.com/in/lipzdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Lipz.
        </a>
      </Container>
    </Styles.Footer>
  );
};

export default Footer;
