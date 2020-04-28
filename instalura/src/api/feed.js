import {Platform} from 'react-native';

const lerFotos = async (callback) => {
  const URL_ANDROID = "192.168.0.17";
  const URL_IOS = "localhost";
  let URL_SELECIONADA = Platform.OS === "ios" ? URL_IOS : URL_ANDROID;

  const fotosHTTP = await fetch(`http://${URL_SELECIONADA}:3030/feed`);
  const fotosJson = await fotosHTTP.json();
  callback(fotosJson);
}

export default lerFotos;
