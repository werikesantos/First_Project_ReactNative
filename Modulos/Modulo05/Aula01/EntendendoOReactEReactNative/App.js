// IMPORTANDO O REACT
import React from 'react';

// TEXT = É UMA FUNÇÃO
import { Text } from 'react-native';

// FUNÇÃO = Arrow Functions
// () = POR PADRÃO JÁ VEM COM PARAMETROS MESMO NÃO ESPECIFICADOS, INVESTIGAR!
// INDICA QUE É UMA FUNÇÃO
const App = () => {
  return (
    <Text>Olá, Mundo!</Text>
  );
}

// AQUI EXECUTA A FUNÇÃO CRIADA ACIMA
export default App;