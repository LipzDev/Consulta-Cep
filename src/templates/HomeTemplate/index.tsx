import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Container } from "../../components/Container/styles";
import * as Styles from "./styles";

const Home = () => {
  const [cep, setCep] = useState();
  const [data, setData] = useState<any>();
  const [locale, setLocale] = useState<String[]>([]);

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

  const handleFavorite = () => {
    setLocale([...locale, data]);
  };

  useEffect(() => {
    const getStorage = localStorage.getItem("info");
    const storageContent = JSON.parse(getStorage!);

    // if (storageContent.filter(el => el.cep !== data.cep)) {
    // }
    localStorage.setItem("info", JSON.stringify(locale));
  }, [locale]);

  return (
    <Layout>
      <Container>
        <form onSubmit={(e: any) => zipCodeSearch(e)}>
          <input
            type="text"
            placeholder="CEP"
            onChange={(e: any) => setCep(e.target.value)}
          />
          <button>Pesquisar</button>
        </form>

        {/* dados */}

        {data && (
          <div>
            <p>Logradouro: {data?.logradouro}</p>
            <p>Bairro: {data?.bairro}</p>
            <p>Cidade: {data?.localidade}</p>
            <p>Estado: {data?.uf}</p>
          </div>
        )}

        <button onClick={() => handleFavorite()}>Favorite</button>
      </Container>
    </Layout>
  );
};

export default Home;
