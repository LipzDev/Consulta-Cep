import React, { useState, useEffect, useContext } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Container } from "../../components/Container/styles";
import Layout from "../../components/Layout";
import { CardContext } from "../../contexts/CardContext";
import { DataTypes } from "../HomeTemplate/index";
import * as Styles from "./styles";

const FavoritosTemplate = () => {
  const [favorite, setFavorite] = useState<DataTypes | string | any>();
  const { locale, setLocale }: any = useContext(CardContext);

  // FUNÇÃO QUE REMOVE OS CARDS

  const removeFavorite = (fav: DataTypes) => {
    setLocale((prev: String[]) =>
      prev.filter((el: any) => el?.cep !== fav?.cep),
    );
  };

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(locale));
    const localStorageContent = window.localStorage.getItem("info");
    setFavorite(JSON.parse(localStorageContent!));
  }, [locale]);

  return (
    <Layout>
      <Container>
        <Styles.Wrapper>
          <BreadCrumb page_1="/" page_2="/favoritos" />

          <div>
            {favorite?.length === 0 && (
              <>
                <small>Você não tem nada em favoritos</small>
                <br></br>
              </>
            )}

            {favorite?.map((fav: DataTypes, index: number) => (
              <div key={index}>
                <br></br>
                <p>Logradouro: {fav?.logradouro}</p>
                <p>Bairro: {fav?.bairro}</p>
                <p>Cidade: {fav?.localidade}</p>
                <p>Estado: {fav?.uf}</p>
                <button onClick={() => removeFavorite(fav)}>Excluir</button>
                <hr />
                <br></br>
              </div>
            ))}
          </div>
        </Styles.Wrapper>
      </Container>
    </Layout>
  );
};

export default FavoritosTemplate;
