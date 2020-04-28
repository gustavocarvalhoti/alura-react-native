import React, {Fragment, useState} from 'react';
import {FlatList, Text, TextInput, View, Image, TouchableOpacity} from "react-native";
import estilo from "./estilo";

const Comentarios = ({comentarios, addComentario}) => {
  const [estComentario, setComentarios] = useState(comentarios);

  /*
  const addComentario = () => {
    //console.warn(conteudoCampoImput);

    const newComentario = {
      date: Date.now(),
      text: conteudoCampoImput,
      userName: "gustavocarvalho.ti"
    };

    setComentarios([...estComentario, newComentario]);

    textInputRef.clear();
  }
  */

  const comentar = () => {
    textInputRef.clear();
    const novoComentario = addComentario(
      conteudoCampoImput, "Gustavera"
    );
    setComentarios([...estComentario, novoComentario]);
  }

  let textInputRef;
  let conteudoCampoImput = "";

  return (
    <Fragment>
        <FlatList
          data={estComentario}
          keyExtractor={( item, index) => index.toString()}
          renderItem={( {item }) =>
            <View style={estilo.inline}>
              <Text>{item.userName}: </Text>
              <Text>{item.text}</Text>
            </View>
          }
        />
        <View style={estilo.inline}>
          <TextInput
            ref={textInput => textInputRef = textInput}
            onChangeText={texto => conteudoCampoImput = texto}
            placeholder={"Deixe seu comentário..."}
            style={estilo.inputComentario}
          />
          <TouchableOpacity onPress={comentar}>
            <Image style={estilo.imgSend} source={require("../../../resources/send.png")}/>
          </TouchableOpacity>
        </View>
    </Fragment>
  );
}

export default Comentarios;
