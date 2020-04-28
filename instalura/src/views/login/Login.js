import React, {Fragment, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import estilo from "./estilo";
import efetuarLogin from "../../api/login";
import AsyncStorage from "@react-native-community/async-storage";

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [msgErro, setMsgErro] = useState("");

  const logar = async () => {
    try {
      // Remover, apenas para teste
      const token = await efetuarLogin("Alura", 123456);
      //const token = await efetuarLogin(usuario, senha);

      // Salva na sessão
      await AsyncStorage.setItem("instalura_token", token);
      setMsgErro("");

      // Abrir a tela de Feed
      //navigation.push("Feed", {usuario});
      // Push - abre uma nova
      // Replace - abre como home, sem o voltar
      // navigation.push("Feed", {usuario: "Gustavera"});
      navigation.replace("Feed", {usuario: "Gustavera"});
    } catch (erro) {
      //console.warn(erro.message);
      setMsgErro(erro.message)
    }
  }

  return (
    <Fragment>
      <View style={estilo.container}>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuário"
          onChangeText={text => setUsuario(text)}
        />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={text => setSenha(text)}
        />
        <Text>{msgErro}</Text>
      </View>
      <View style={estilo.btnView}>
        <Button title="Entrar" onPress={logar}/>
      </View>
    </Fragment>
  )
};

export default Login;
