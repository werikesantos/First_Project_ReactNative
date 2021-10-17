import React from 'react';
import styled from 'styled-components/native';

// flex-direction
// row => Linha
// column => Coluna

// justify-content
// flex-end => alinha na esquerda / coluna no final
// center => row - centralizar no meio da tela / column - centraliza na coluna
// space-between => espaço igual entre as figuras
// space-around => espaço igual de ponta a ponta

// align-items
// center => centraliza linha e coluna no meio
// flex-end => centraliza linha e coluna no meio
const Page = styled.SafeAreaView`
  flex:1;
  margin-top:61px;
  flex-direction:column;
  justify-content:space-around;
  align-items:flex-end;
`;

const Text = styled.Text`
  color:white;
  font-size:16px;
  text-align:center;
`;

// EXEMPLO 1

// flex:1 => VAI DEIXAR CADA "Quadrado" DIVIDIDO COM O MESMO TAMANHO
// const Quadrado = styled.View`
//   flex:1;
//   height:50px;
//   width:50px;
//   background-color:${props=>props.cor};
// `;

// export default () => {
//   return (
//     <Page>
//       <Quadrado cor="red"></Quadrado>
//       <Quadrado cor="green"></Quadrado>
//       <Quadrado cor="blue"></Quadrado>
//     </Page>
//   );
// }


// EXEMPLO 2

// NESSE EXEMPLO CADA "Quadrado" RECEBE UM TAMANHO DIFERENTE COMO O EXEMPLO DO ( flex={2} cor="green" ) 
// const Quadrado = styled.View`
//   flex:1;
//   height:50px;
//   background-color:${props=>props.cor};
// `;

// export default () => {
//   return (
//     <Page>
//       <Quadrado flex={1} cor="red">
//         <Text>Red</Text>
//       </Quadrado>
//       <Quadrado flex={2} cor="green">
//         <Text>Green</Text>
//       </Quadrado>
//       <Quadrado flex={1} cor="blue">
//         <Text>Blue</Text>
//       </Quadrado>
//     </Page>
//   );
// }


// EXEMPLO 3

const Quadrado = styled.View`
  height:50px;
  width:50px;
  background-color:${props=>props.cor};
`;

export default () => {
  return (
    <Page>
      <Quadrado cor="red">
        <Text>Red</Text>
      </Quadrado>
      <Quadrado cor="green">
        <Text>Green</Text>
      </Quadrado>
      <Quadrado cor="blue">
        <Text>Blue</Text>
      </Quadrado>
    </Page>
  );
}