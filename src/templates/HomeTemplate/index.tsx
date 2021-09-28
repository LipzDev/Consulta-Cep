import React, { useState, useContext } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container/styles";
import { CardContext } from "../../contexts/CardContext";
import BreadCrumb from "../../components/BreadCrumb";
import theme from "../../styles/theme";
import Swal from "sweetalert2";
import Link from "next/link";
import Map from "../../components/Map";
import * as Styles from "./styles";

export type DataTypes = {
  [key: string]: string;
};

const Home = () => {
  const [cep, setCep] = useState<string | undefined>();
  const [data, setData] = useState<DataTypes>();
  const [isBlocked, setIsBlocked] = useState<boolean>(true);
  const { locale, setLocale }: any = useContext(CardContext);

  // TODO: STATE Q PEGA AS INFO DA API
  const [local, setLocal] = useState();

  // TODO: CONST QUE FILTRA O OBJETO QUE
  const LAT_LNG = local?.results[0]?.geometry?.location;

  // TODO: ENDPOINT DO GOOGLE GEOCODE PRECISO ESCONDER A KEY E PRECISO VALIDAR O CEP PARA SEMPRE TER O 00000-000
  const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyBpag7bQCb9utplIXoQMIg3EvwlbRz-Q0s`;

  // TODO: FUNÇÃO QUE FAZ O FETCH NO ENDPOINT
  const GET_LAT_LONG = async () => {
    const response = await fetch(`${endpoint}`);
    const json = await response.json();
    setLocal(json);
  };

  // FUNÇÃO QUE FAZ O FETCH
  const zipCodeSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsBlocked(false);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await response.json();
      setData(json);
      GET_LAT_LONG();
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
    setLocale([...locale, data]);
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
              {!data && <img src="../img/img1.svg" alt="Map" />}
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
                      {/* TODO: COMPONENTIZAR ESTE CARA */}
                      <p>
                        <b>Logradouro:</b>{" "}
                        {data?.logradouro ? data?.logradouro : "Não informado."}
                      </p>
                      <p>
                        <b>Bairro:</b>{" "}
                        {data?.bairro ? data?.bairro : "Não informado"}
                      </p>
                      <p>
                        <b>Cidade:</b>{" "}
                        {data?.localidade ? data?.localidade : "Não informado"}
                      </p>
                      <p>
                        <b>Estado:</b> {data?.uf ? data.uf : "Não informado"}
                      </p>

                      {/* TODO: REFATORAR ESTE BOTÃO */}

                      <button
                        disabled={isBlocked ? true : false}
                        style={{
                          backgroundColor: isBlocked
                            ? "#ccc"
                            : theme.colors.primary,
                          color: isBlocked ? "#3e3e3e" : "white",
                          cursor: isBlocked ? "no-drop" : "pointer",
                        }}
                        onClick={() => saveFavorite()}
                        title={
                          isBlocked
                            ? "Insira outro CEP para favoritar*"
                            : "Deseja salvar o CEP pesquisado ?*"
                        }
                      >
                        {isBlocked ? "Salvo !" : "Salvar ?"}
                      </button>
                    </Styles.InfoCep>
                    {/* // TODO: MAPA QUE EXIBE A LOCALIZAÇÃO */}
                    <Map lat={LAT_LNG?.lat} lng={LAT_LNG?.lng} />
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
