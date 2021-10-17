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
`;

// QUANDO NÃO COUBER VÁRIOS ITENS DENTRO DE UMA LINHA TEM A PROPRIEDADE PARA QUEBRA: 
// flex-wrap
// wrap => QUEBRA DE LINHA
// nowrap => PADRÃO
const Header = styled.View`
  margin-top:61px;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:center;
  background-color:#EEE;
  height:300px;
`;

const Text = styled.Text`
  color:white;
  font-size:16px;
  text-align:center;
`;

const Quadrado = styled.View`
  height:50px;
  width:50px;
  background-color:${props=>props.cor};
`;


// EXEMPLO 1

// ALINHANDO O PROPRIO ITEM => style={{alignSelf:'?'}}
// alignSelf:'flex-start'
// alignSelf:'center'
// alignSelf:'flex-end'
// export default () => {
//   return (
//     <Page>
//       <Header>
//         <Quadrado cor="red">
//           <Text>Red</Text>
//         </Quadrado>
//         <Quadrado style={{alignSelf:'flex-start'}} cor="green">
//           <Text>Green</Text>
//         </Quadrado>
//         <Quadrado cor="blue">
//           <Text>Blue</Text>
//         </Quadrado>
//       </Header>
//     </Page>
//   );
// }


// EXEMPLO 2

// CRIANDO VÁRIOS "QUADRADOS" EM UMA UNICA LINHA.
export default () => {
  return (
    <Page>
      <Header>
        <Quadrado cor="red">
          <Text>Red</Text>
        </Quadrado>
        <Quadrado cor="green">
          <Text>Green</Text>
        </Quadrado>
        <Quadrado cor="blue">
          <Text>Blue</Text>
        </Quadrado>
        <Quadrado cor="red">
          <Text>Red</Text>
        </Quadrado>
        <Quadrado cor="green">
          <Text>Green</Text>
        </Quadrado>
        <Quadrado cor="blue">
          <Text>Blue</Text>
        </Quadrado>
        <Quadrado cor="red">
          <Text>Red</Text>
        </Quadrado>
        <Quadrado cor="green">
          <Text>Green</Text>
        </Quadrado>
        <Quadrado cor="blue">
          <Text>Blue</Text>
        </Quadrado>
      </Header>
    </Page>
  );
}