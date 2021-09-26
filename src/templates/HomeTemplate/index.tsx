import React, { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container/styles";
import { CardContext } from "../../contexts/CardContext";
import * as Styles from "./styles";
import BreadCrumb from "../../components/BreadCrumb";

export type DataTypes = {
  [key: string]: string;
};

const Home = () => {
  const [cep, setCep] = useState<string | undefined>();
  const [data, setData] = useState<DataTypes>();
  const [isBlocked, setIsBlocked] = useState<boolean>(true);
  const { locale, setLocale }: any = useContext(CardContext);

  // FUNÇÃO QUE FAZ O FETCH

  const zipCodeSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsBlocked(false);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao buscar o CEP");
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
          <BreadCrumb page_1="/" page_2="/favoritos" />

          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => zipCodeSearch(e)}
          >
            <input
              type="text"
              placeholder="CEP"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCep(e.target.value)
              }
            />
            <button>Pesquisar</button>
          </form>

          {/* EXIBE AS INFORMAÇÕES DA API */}

          {data && (
            <div>
              <p>Logradouro: {data?.logradouro}</p>
              <p>Bairro: {data?.bairro}</p>
              <p>Cidade: {data?.localidade}</p>
              <p>Estado: {data?.uf}</p>
            </div>
          )}

          {/* BOTÃO QUE FAZ SALVAR AOS FAVORITOS */}

          <button
            disabled={isBlocked ? true : false}
            onClick={() => saveFavorite()}
            title={
              isBlocked ? "Para favoritar você deve inserir um CEP válido*" : ""
            }
          >
            Favoritar
          </button>
        </Styles.Wrapper>
      </Container>
    </Layout>
  );
};

export default Home;
