import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container/styles";
import * as Styles from "./styles";

type DataTypes = {
  [key: string]: string;
};

const Home = () => {
  const [cep, setCep] = useState<string | undefined>();
  const [data, setData] = useState<DataTypes>();
  const [favorite, setFavorite] = useState<DataTypes | string | any>();
  const [isBlocked, setIsBlocked] = useState<boolean>(true);
  const [locale, setLocale] = useState(() => {
    if (typeof window !== "undefined") {
      const itemInStorage = JSON.parse(localStorage.getItem("info") as string);
      if (!itemInStorage) return [];
      return itemInStorage;
    }
  });

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

  // FUNÇÃO QUE SALVA OS CARDS

  const saveFavorite = () => {
    setIsBlocked(true);
    setLocale([...locale, data]);
  };
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(locale));
    setFavorite(locale);
  }, [locale]);

  // FUNÇÃO QUE REMOVE OS CARDS

  const removeFavorite = (fav: DataTypes) => {
    setLocale((prev: String[]) =>
      prev.filter((el: any) => el?.cep !== fav?.cep),
    );
    localStorage.setItem("info", JSON.stringify(locale));
  };

  return (
    <Layout>
      <Container>
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

        {/* MOSTRA OS CEP FAVORITOS */}

        {favorite?.length === 0 && (
          <>
            <small>Você não tem nada em favoritos</small>
            <br></br>
          </>
        )}

        <button
          disabled={isBlocked ? true : false}
          onClick={() => saveFavorite()}
          title={
            isBlocked ? "Para salvar você deve inserir um cep válido!" : ""
          }
        >
          Favoritar
        </button>

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
      </Container>
    </Layout>
  );
};

export default Home;
