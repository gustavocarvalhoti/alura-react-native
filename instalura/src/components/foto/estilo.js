import {Dimensions, StyleSheet} from "react-native";

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
    margin: 10,
    borderRadius: 30, //Borda redonda
  },
  like: {
    width: 40,
    height: 40,
    margin: 5,
  },
  comentario: {
    margin: 5,
  },
  viewLike: {
    flexDirection: "row",
    alignItems: "center",
  }
});

export default estilo;
