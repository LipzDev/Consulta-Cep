import React from "react";
import Map from "../../components/Map";
import * as Styles from "./styles";

type CardProps = {
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  lat?: number | undefined;
  lng?: number | undefined;
  onClick?: () => void;
};

const Card = ({
  logradouro,
  bairro,
  cidade,
  estado,
  onClick,
  lat,
  lng,
}: CardProps) => {
  return (
    <Styles.Box>
      <Map lat={lat} lng={lng} />
      <div>
        <p>
          <b>Logradouro: </b>
          {logradouro}
        </p>
        <p>
          <b>Bairro: </b>
          {bairro}
        </p>
        <p>
          <b>Cidade: </b>
          {cidade}
        </p>
        <p>
          <b>Estado: </b>
          {estado}
        </p>
        <button onClick={onClick}>Excluir</button>
      </div>
    </Styles.Box>
  );
};

export default Card;
