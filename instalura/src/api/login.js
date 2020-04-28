import {Platform} from 'react-native';

const efetuarLogin = async (usuario, senha) => {
  const URL_ANDROID = "192.168.0.17";
  const URL_IOS = "localhost";
  let URL_SELECIONADA = Platform.OS === "ios" ? URL_IOS : URL_ANDROID;

  let cabacalhoHTTP = {
    method: "POST",
    body: JSON.stringify({
      userName: usuario,
      password: senha
    }),
    headers: {
      "Content-type": "application/json"
    },
  }

  // Senha -> Alura | 123456
  const resposta = await fetch(`http://${URL_SELECIONADA}:3030/users/login`, cabacalhoHTTP);

  if(resposta.ok){
    return resposta.headers.get("x-access-token");
  }else {
    throw new Error("Não foi possível logar...")
  }

  //console.warn(resposta);
}

export default efetuarLogin;
