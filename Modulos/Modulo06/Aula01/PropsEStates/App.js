import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Texto = styled.Text`
  font-size:40px;
`;

// =======================================================================================
// EXEMPLO 1
// PROPS => ATRAVÉS DO PARAMETRO "props" EU POSSO PEGAR O VALOR DENTRO DA "TAG" Hello. 

// const Hello = (props) => {
//   return (
//     <Texto>{props.frase}</Texto>
//   );
// }

// PROPS => SÃO PROPRIEDADES FIXAS QUE NÃO ALTERAM O SEU VALOR COM O TEMPO!
// export default () => {
//   return (
//     <Page>
//       <Hello frase="Seja bem-vindo(a)!" />
//       <Hello frase="Outra frase!" />
//     </Page>
//   );
// }

// =======================================================================================

// EXEMPLO 2
// TEM O MESMO COMPORTAMENTO QUE O EXEMPLO ACIMA, A DIFERENÇA É A FORMA DE ACESSO!

// const Hello = ({frase}) => {
//   return (
//     <Texto>{frase}</Texto>
//   );
// }

// export default () => {
//     return (
//     <Page>
//       <Hello frase="Seja bem-vindo(a)!" />
//       <Hello frase="Outra frase!" />
//     </Page>
//   );
// }

// =======================================================================================

// EXEMPLO 3 - CRIANDO UMA STATE
// PUXANDO OS RECURSOS DO REACT QUE NO CASO É O STATE => { useState }
// import React, { useState } from 'react';

// OBS: O RETURN TEM O RETORNO VISUAL E PRA CRIAR A STATES DEVE SER FEITO ANTES DO RETURN
// state => É UMA DEFINIÇÃO DE VARIÁVEL FEITA INTERNAMENTE.
// FORAM DESENVOLVIDAS PARA SEREM ALTERADAS

// const Hello = () => {

  // DENTRO DO ARRAY SÃO CRIADOS 2 VALORES:
  // O PRIMEIRO: NOME DA VARIÁVEL QUE VAI TER OS DADOS QUE EU VOU QUERER ARMAZENAR
  // O SEGUNDO: É UMA FUNÇÃO QUE VAI MUDAR O VALOR DO STATE
  // DENTRO DO "useState('')" É PASSADO COMO PARAMETRO O VALOR INICIAL DA STATES.
  // PODE SER UM VALOR NULLO OU ATRIBUÍDO
//   const [ nomeUsuario, setNomeUsuario ] = useState('Werike');

//   return (
//     <Texto>Nome: {nomeUsuario}</Texto>
//   );

// }

// export default () => {
//   return (
//     <Page>
//       <Hello />
//     </Page>
//   );
// }