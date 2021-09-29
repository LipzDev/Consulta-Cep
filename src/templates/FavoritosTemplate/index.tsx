import React, { useState, useEffect, useContext } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Card from "../../components/Card";
import { Container } from "../../components/Container/styles";
import Layout from "../../components/Layout";
import { CardContext } from "../../contexts/CardContext";
import { DataTypes } from "../HomeTemplate/index";
import Link from "next/link";
import Head from "next/head";
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
      <Head>
        <title>Consulta de CEP</title>
        <link rel="shortcut icon" href="/img/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        {/* TAGS DE SEO OG*/}
        <meta property="og:title" content="Busca de CEP"></meta>
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:site_name" content="Busca de CEP"></meta>
        <meta property="og:description" content="Site criado por LipzDev." />
        <meta name="description" content="Site criado por LipzDev."></meta>
        <meta property="og:image" content="/img/logo.png"></meta>
        {/* TAGS DE SEO TWITTER*/}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Busca de CEP"></meta>
        <meta
          name="twitter:description"
          content="Site criado por LipzDev."
        ></meta>
        <meta name="twitter:site" content="@LipzDev"></meta>
        <meta name="twitter:creator" content="@LipzDev"></meta>
        <meta name="twitter:image" content="/img/logo.png"></meta>
        <meta name="theme-color" content="#6C63FF"></meta>
      </Head>
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
