import React from "react";
import * as Styles from "./styles";

type CardProps = {
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  onClick?: () => void;
};

const Card = ({ logradouro, bairro, cidade, estado, onClick }: CardProps) => {
  return (
    <Styles.Box>
      <img src="../img/map.png" alt="Mapa" />
      <div>
        <p>{logradouro}</p>
        <p>{bairro}</p>
        <p>{cidade}</p>
        <p>{estado}</p>
        <button onClick={onClick}>Excluir</button>
      </div>
    </Styles.Box>
  );
};

export default Card;
