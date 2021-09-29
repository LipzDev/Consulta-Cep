import React, { useState, useEffect, useContext } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Card from "../../components/Card";
import { Container } from "../../components/Container/styles";
import Layout from "../../components/Layout";
import { CardContext } from "../../contexts/CardContext";
import { DataTypes } from "../HomeTemplate/index";
import Link from "next/link";
import * as Styles from "./styles";

const FavoritosTemplate = () => {
  const [favorite, setFavorite] = useState<DataTypes | string | any>();
  const { locale, setLocale } = useContext<any>(CardContext);

  // FUNÇÃO QUE REMOVE OS CARDS
  const removeFavorite = (fav: any) => {
    setLocale((prev: string[]) =>
      prev.filter((el: any) => el[0]?.cep !== fav[0]?.cep),
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
          <BreadCrumb>
            <Link href={"/"}>Início</Link>
            {">"}
            <Link href={"/favoritos"}>Favoritos</Link>
          </BreadCrumb>

          <div>
            {favorite?.length === 0 && (
              <>
                <small>Você não tem nenhum CEP salvo!</small>
              </>
            )}

            <Styles.CardsSection>
              {favorite?.map((item: any, index: number) => (
                <Card
                  key={index}
                  lng={item[1]?.lng}
                  lat={item[1]?.lat}
                  logradouro={
                    item[0]?.logradouro ? item[0]?.logradouro : "Não informado."
                  }
                  bairro={item[0]?.bairro ? item[0]?.bairro : "Não informado."}
                  cidade={
                    item[0]?.localidade ? item[0]?.localidade : "Não informado."
                  }
                  estado={item[0]?.uf ? item[0]?.uf : "Não informado."}
                  onClick={() => removeFavorite(item)}
                />
              ))}
            </Styles.CardsSection>
          </div>
        </Styles.Wrapper>
      </Container>
    </Layout>
  );
};

export default FavoritosTemplate;
