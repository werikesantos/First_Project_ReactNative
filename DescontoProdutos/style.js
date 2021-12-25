import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#171C28",
  },
  conteinerTittleArea: {
    width: "90%",
    alignSelf: "center"
  },
  tittleArea: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  conteinerTextInput: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    backgroundColor: "#252840",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    fontWeight: "bold",
  },
  conteinerNotaArea: {
    alignSelf: "center",
    height: 40,
    width: "90%",
    marginTop: 20
  },
  conteinerNotaTittle: {
    height: 40,
    fontWeight: "bold",
    fontSize: 14,
    color: "#FFFFFF"
  },
  conteinerNotaConteudo: {
    marginTop: -20,
    height: 40,
    fontSize: 14,
    color: "#FFFFFF"
  },
  conteinerResultadoArea: {
    alignSelf: "center",
    height: 140,
    width: "90%",
    marginTop: 40,
    backgroundColor: "#B6CBFF",
    borderRadius: 5,
    padding: 10
  },
  conteinerResultadoTittle: {
    height: 20,
    fontSize: 16,
    color: "#000",
    alignSelf: "center",
    fontWeight: "bold"
  },
  conteinerResultadoConteudoNormal: {
    height: 20,
    fontSize: 14,
    color: "#000",
    alignSelf: "flex-start",
    marginTop: 10
  },
  conteinerResultadoConteudoBold: {
    height: 20,
    fontSize: 14,
    color: "#000",
    alignSelf: "flex-start",
    marginTop: 10,
    fontWeight: "bold"
  },
  botaoAplicar: {
    alignSelf: "center",
    width: "90%",
    marginTop: 60
  },
});