import React from 'react';
import styled from 'styled-components/native';

// CRIANDO UM COMPONENTE USANDO - styled-components
// styled.View``; => DENTRO É POSSÍVEL COLOCAR ESTILOS PADRÃO CSS. 
const Page = styled.SafeAreaView`
  flex:1;
  background-color:blue;
`;

const Texto = styled.Text`
  color:orange;
  font-size:30px;
  background-color:green;
`;

const Texto1 = styled.Text`
  color:${props=>props.cor};
  font-size:30px;
  background-color:green;
`;

export default () => {
  return (
    <Page>
      <Texto>Testando</Texto>
      {/* color:${props=>props.cor}; => USA UMA FUNÇÃO PARA PEGAR O ATRIBUTO DENTRO DA "TAG" */}
      <Texto1 cor="yellow">1,2,3...</Texto1>
      <Texto1 cor="red">USANDO PROPS</Texto1>
    </Page>
  );
}