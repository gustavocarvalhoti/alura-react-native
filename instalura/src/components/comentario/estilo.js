import {StyleSheet} from "react-native";

const estilo = StyleSheet.create({
  inline: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  imgSend: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  inputComentario: {
    flex: 1 // Tenta pegar o máximo de tamanho possivel
  }
});

export default estilo;
