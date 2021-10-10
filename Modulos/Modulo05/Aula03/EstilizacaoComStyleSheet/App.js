import React from 'react';

// View => É UMA DIV(UM CONTEINER)
// StyleSheet => É UM MÉDOTO PARA ESTILIZAR O MEU COMPONENTE(View)
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default () => {
  return (
    // style={} => FUNÇÃO PARA CHAMAR A FUNÇÃO CRIADA ABAIXO ACESSANDO O SEU ATRIBUTO
    // styles={ } => OS COLCHETES SERVE PARA ACESSAR OS ATRIBUTOS DO OBJETO
    // NO IPHONE É RUIM USAR O (View) PORQUE FICA COLADO O (Text) NO TOPO DA TELA. 
    //   PARA RESOLVER BASTA EDITAR NA MÃO OU IMPORTAR O MÉTODO (SafeAreaView).
    <View>
      {/* style={{ color: '#FFF' }} => É POSSÍVEL ESTILIZAR DENTRO DO PROPRIO COMPONENTE */}
      <Text style={{ width: 'auto', height: 50 }}></Text>
      {/* COLOCANDO DENTRO DE CHAVES [] POSSO CHAMAR UM ATRIBUTO DO OBJETO (styles.menu) 
      E ATRIBUIR NOVOS ATRIBUTOS ( { width: 'auto'} ) => style={[styles.menu, { color: '#FFF' }]} */}
      <Text style={[styles.menu, { color: '#FFF', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }]}>Menu</Text>
      <Text style={[styles.texto, { width: 'auto', height: 950, backgroundColor: '#C32BAD' }]}>Conteúdo do aplicativo...</Text>
    </View >
  );
}

// POR PADRÃO DEVE SER CRIADO LOGO ABAIXO:
// CREATE É UMA MÉTODO
// E DENTRO DELE É PASSADO UM OBJETO {}
const styles = StyleSheet.create({
  // DENTRO DO OBJETO ABAIXO PODE SER CRIADO TODA A ESTILIZAÇÃO QUE EU QUERO!
  menu: {
    width: 'auto',
    height: 40,
    backgroundColor: '#7027A0',
  },
  texto: {
    fontSize: 20,
    fontWeight: '900',
    color: '#CEE5D0'
  }
});