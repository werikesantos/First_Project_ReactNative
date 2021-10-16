import React from 'react';
import styled from 'styled-components/native';

// flex-direction:column => É UMA PROPRIEDADE PADRÃO DE ALINHAMENTO EM COLUNA.
// flex-direction:row => É A PROPRIEDADE DE ALINHAMENTO EM LINHA.
// flex-direction:column-reverse => É A PROPRIEDADE DE ALINHAMENTO EM COLUNAS REVERSA. FICA EM COLUNAS DE BAIXO PRA CIMA.
// flex-direction:row-reverse => É A PROPRIEDADE DE ALINHAMENTO EM LINHA DA ESQUERDA PARA A DIREITA.
const Page = styled.SafeAreaView`
  flex:1;
  margin-top:61px;
  flex-direction:row;
`;

const Quadrado = styled.View`
  height:50px;
  width:50px;
  background-color:${props=>props.cor};
`;

export default () => {
  return (
    <Page>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
    </Page>
  );
}