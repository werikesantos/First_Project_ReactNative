// PARA CRIAR COMPONENTES NO FORMATO DE CLASSES É NECESSÁRIO IMPORTAR { Componets }
import React, { Component } from 'react';

import { Text } from 'react-native';

// FORMAS DE CRIAR FUNÇÕES:

// Arrow functions
// const App = () => {
//   return (
//     <Text>Olá, Mundo!</Text>
//   );
// }

// // FUNÇÃO
// function App() {
//   return (
//     <Text>Olá, Mundo!</Text>
//   );
// }

// CRIANDO COMPONENTES ATRAVÉS DE CLASSES
class App extends Component {

  // MÉTODO DE RENDERIZAÇÃO
  render() {
    return (
      <Text>Olá, Mundo!</Text>
    );
  }
}

export default App;