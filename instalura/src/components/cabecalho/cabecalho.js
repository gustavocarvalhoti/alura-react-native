import React from 'react';
import {Image, Text, View} from "react-native";
import estilo from './estilo';

// Function component
const Cabecalho = ({nomeUsuario, urlImage}) => {
  return (
    <View style={estilo.cabecalho}>
      <Image
        //source={require("../../../resources/gustavo.jpg")} - No projeto
        source={{uri: urlImage}}                            // No Servidor
        style={estilo.fotoUsuario}/>
      <Text>{nomeUsuario}</Text>
    </View>
  );
}

export default Cabecalho;
