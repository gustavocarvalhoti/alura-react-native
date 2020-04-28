import {Dimensions, StyleSheet} from "react-native";

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
  container: {
    flexGrow: 2, // Maior parte da tela
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    width: largura * 0.8, // 80% da tela
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
  },
  btnView: {
    alignItems: "center",
    marginBottom: 50,
  },
});

export default estilo;
