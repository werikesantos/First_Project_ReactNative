import React, { useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, TextInput, Button, Alert } from 'react-native';
import { styles } from "./style";

const DescontoProdutos = () => {
  const [valorConta, setValorConta] = useState("0.00");
  const [valorDesconto, setValorDesconto] = useState("0.00");
  const [valorTotal, setValorTotal] = useState("0.00");

  const botaoAplicar = () => {
    let newValorConta = parseFloat(valorConta);
    const valorPorcentagem = ((10 / 100) * newValorConta);
    setValorDesconto(valorPorcentagem);
    const valorTotal = (newValorConta - valorPorcentagem);
    setValorTotal(valorTotal);

    if (valorConta > 0) {
      Alert.alert(
        "Olá, Fulano ;)",
        "O desconto foi aplicado com sucesso! Muito obrigado por comprar conosco. Volte Sempre!",
        [
          { text: "OK", onPress: () => console.log("Selecionado") }
        ]
      );
    } else {
      Alert.alert(
        "Ahhh que pena :(",
        "Faça uma compra para que possamos te oferecer um desconto =)",
        [
          { text: "OK", onPress: () => console.log("Selecionado") }
        ]
      );
    }
  }

  return (
    <SafeAreaView style={styles.conteiner}>
      <StatusBar
        backgroundColor="#000"
      />
      <View style={styles.conteinerTittleArea}>
        <Text style={styles.tittleArea}>
          Desconto de Produtos
        </Text>
      </View>
      <View>
        <TextInput
          onChangeText={valorInput => setValorConta(valorInput)}
          placeholder='Valor da compra ...'
          placeholderTextColor='#BEC7C7'
          keyboardType='numeric'
          color='#BEC7C7'
          style={styles.conteinerTextInput}
        >
        </TextInput>
      </View>
      <View style={styles.conteinerNotaArea}>
        <Text
          style={styles.conteinerNotaTittle}
        >
          Nota:
        </Text>
        <Text
          style={styles.conteinerNotaConteudo}
        >
          Será aplicado um desconto de 10% ao valor total da compra.
        </Text>
      </View>
      <View style={styles.conteinerResultadoArea}>
        <Text
          style={styles.conteinerResultadoTittle}
        >
          RESULTADO
        </Text>
        <Text
          style={styles.conteinerResultadoConteudoNormal}
        >
          Valor da compra ......................................... R${" "}
          {valorConta > 0 ? valorConta : "0.00"}
        </Text>
        <Text
          style={styles.conteinerResultadoConteudoNormal}
        >
          Desconto ..................................................... R${" "}
          {parseFloat(valorDesconto > 0 ? valorDesconto : "0.00").toFixed(2)}
        </Text>
        <Text
          style={styles.conteinerResultadoConteudoBold}
        >
          Total ........................................................ R${" "}
          {parseFloat(valorTotal > 0 ? valorTotal : "0.00").toFixed(2)}
        </Text>
      </View>
      <View style={styles.botaoAplicar}>
        < Button
          title='Aplicar'
          color='#31731F'
          onPress={botaoAplicar}
        />
      </View>
    </SafeAreaView >
  );
};

export default DescontoProdutos;