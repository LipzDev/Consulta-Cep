export const GET_LAT_LNG = (cep: string) => {
  // ATENÇÃO, A KEY UTILIZADA ESTÁ DISPONÍVEL PARA QUE O PROJETO POSSA SER TESTADO, ESTOU CIENTE QUE NESTE CASO DEVERIA TER UTILIZADO UMA VARIAVEL DE AMBIENTE!

  return {
    endpoint: `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyBpag7bQCb9utplIXoQMIg3EvwlbRz-Q0s`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};
