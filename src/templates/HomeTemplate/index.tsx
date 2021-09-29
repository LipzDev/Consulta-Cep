import React, { useState, useContext } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container/styles";
import { CardContext } from "../../contexts/CardContext";
import BreadCrumb from "../../components/BreadCrumb";
import Swal from "sweetalert2";
import Link from "next/link";
import Map from "../../components/Map";
import Button from "../../components/Button";
import * as Styles from "./styles";

export type DataTypes = {
  [key: string]: string;
  results?: any;
};

const Home = () => {
  const [cep, setCep] = useState<string>();
  const [data, setData] = useState<DataTypes>();
  const [isBlocked, setIsBlocked] = useState<boolean>(true);
  const { locale, setLocale } = useContext<any>(CardContext);
  const [mapInfo, setMapInfo] = useState<DataTypes>();
  const mapPosition = mapInfo?.results[0]?.geometry?.location;

  // FUNÇÃO QUE FAZ A CONVERSÃO DO CEP EM LATITUDE E LONGITUDE
  const convertZipCode = async () => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${process.env.API_KEY}`,
    );
    const json = await response.json();
    setMapInfo(json);
  };

  // FUNÇÃO QUE FAZ O FETCH NA LISTA DE
  const zipCodeSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsBlocked(false);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await response.json();
      setData(json);
      convertZipCode();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Erro",
        text: "Insira um CEP válido de até 8 dígitos",
        icon: "error",
      });
    }
  };

  // // FUNÇÃO QUE SALVA OS CARDS
  const saveFavorite = () => {
    setIsBlocked(true);
    setLocale([...locale, [data, mapPosition]]);
  };

  return (
    <Layout>
      <Container>
        <Styles.Wrapper>
          <BreadCrumb>
            <Link href={"/"}>Início</Link>
          </BreadCrumb>

          <Styles.Content>
            <Styles.CepContent>
              <h1>Olá, seja bem vindo!</h1>
              {!data && <img src="../img/img1.svg" alt="Imagem" />}
              <small>Insira seu CEP abaixo:</small>
              <Styles.Form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  zipCodeSearch(e)
                }
              >
                <input
                  type="text"
                  placeholder="00000-000"
                  required
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCep(e.target.value)
                  }
                />

                <button>
                  <img src="../img/lupe.png" alt="Imagem de lupa" />
                </button>
              </Styles.Form>

              {/* EXIBE AS INFORMAÇÕES DA API */}
              <Styles.LocaleContent>
                {data && (
                  <>
                    <Styles.InfoCep>
                      <p>
                        <b>Logradouro:</b>{" "}
                        {data?.logradouro ? data?.logradouro : "Não informado."}
                      </p>

                      <p>
                        <b>Bairro:</b>{" "}
                        {data?.bairro ? data?.bairro : "Não informado."}
                      </p>

                      <p>
                        <b>Cidade:</b>{" "}
                        {data?.localidade ? data?.localidade : "Não informado."}
                      </p>

                      <p>
                        <b>Estado:</b> {data?.uf ? data.uf : "Não informado."}
                      </p>

                      <Button
                        disabled={isBlocked ? true : false}
                        onClick={() => saveFavorite()}
                        title={
                          isBlocked
                            ? "Insira outro CEP para favoritar*"
                            : "Deseja salvar o CEP pesquisado ?*"
                        }
                        actived={isBlocked}
                      >
                        {isBlocked ? "Salvo !" : "Salvar ?"}
                      </Button>
                    </Styles.InfoCep>
                    <Map lat={mapPosition?.lat} lng={mapPosition?.lng} />
                  </>
                )}
              </Styles.LocaleContent>
            </Styles.CepContent>
          </Styles.Content>
        </Styles.Wrapper>
      </Container>
    </Layout>
  );
};

export default Home;
