import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container/styles";
import * as Styles from "./styles";

const Home = () => {
  const [cep, setCep] = useState();
  const [data, setData] = useState<any>();
  const [locale, setLocale]: any = useState(() => {
    if (typeof window !== "undefined") {
      const itemInStorage = JSON.parse(localStorage.getItem("info") as any);
      if (!itemInStorage) return [];
      return itemInStorage;
    }
  });
  const [favorite, setFavorite] = useState<any>();

  // FUNÇÃO QUE FAZ O FETCH

  const zipCodeSearch = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao buscar o CEP");
    }
  };

  // FUNÇÃO QUE SALVA OS DADOS

  const handleFavorite = () => {
    setLocale([...locale, data]);
  };
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(locale));
  }, [locale]);

  // FUNÇÃO QUE PUXA DADOS SALVOS

  const showFavorite = () => {
    const getStorage = window.localStorage.getItem("info");
    const storageContent = JSON.parse(getStorage!);
    setFavorite(storageContent);
  };

  return (
    <Layout>
      <Container>
        {/* SERVE PARA OBTER O TEXTO DO INPUT */}

        <form onSubmit={(e: any) => zipCodeSearch(e)}>
          <input
            type="text"
            placeholder="CEP"
            required
            onChange={(e: any) => setCep(e.target.value)}
          />
          <button>Pesquisar</button>
        </form>

        {/* MOSTRA AS INFORMAÇÕES DA API */}

        {data && (
          <div>
            <p>Logradouro: {data?.logradouro}</p>
            <p>Bairro: {data?.bairro}</p>
            <p>Cidade: {data?.localidade}</p>
            <p>Estado: {data?.uf}</p>
            <br></br>
          </div>
        )}

        {/* MOSTRA OS CARDS FAVORITOS */}

        {favorite?.length === 0 && (
          <small>Você não tem nada em favoritos</small>
        )}

        {favorite?.map(fav => (
          <div>
            <p>Logradouro: {fav?.logradouro}</p>
            <p>Bairro: {fav?.bairro}</p>
            <p>Cidade: {fav?.localidade}</p>
            <p>Estado: {fav?.uf}</p>
            <br></br>
          </div>
        ))}

        {/* ATIVA AS FUNÇÕES SALVAR E FAVORITAR */}

        <button onClick={() => handleFavorite()}>Save</button>
        <button onClick={() => showFavorite()}>Favorite</button>
      </Container>
    </Layout>
  );
};

export default Home;
