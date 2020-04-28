import React, {Fragment, useEffect, useState} from 'react';
import lerFotos from '../../api/feed';
import {FlatList, Platform, ScrollView, StatusBar} from 'react-native';
import {Cabecalho} from "../../components/cabecalho";
import {Foto} from "../../components/foto";
import {Comentarios} from "../../components/comentario";
import {imgLike, curtirFoto} from '../../api/curtidas';
import {addComentario} from '../../api/comentario';

/*
const informacoes = [
  {id: 1, usuario: "Gustavo", foto: "gustavo.jpg"},
  {id: 2, usuario: "Mi", foto: "mi.jpg"},
  {id: 3, usuario: "Duda", foto: "duda.jpg"},
  {id: 4, usuario: "Davi", foto: "davi.jpg"},
];
 */

const Feed = () => {
  // Inicia com arrays vazio - [objeto, como alterar]
  const [fotos, setFotos] = useState([]);

  // Quando o componente estiver pronto para ser desenhado, não pode retornas nada, só executa funções
  // Toda vez que redesenhar a tela
  useEffect(() => {
    // Função dentro de outra função
    lerFotos(setFotos);
  },[]);

  let altura = Platform.OS === "ios" ? 35 : 0;

  return (
    <ScrollView style={{marginTop: altura}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <FlatList
        data={fotos}
        keyExtractor={( item ) => item.id.toString()}
        renderItem={( {item }) =>
          <Fragment key={item.id}>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL}
            />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              quantidadeLikes={item.likes}
              imgLike={imgLike}
              curtirFoto={curtirFoto}
            />
            <Comentarios
              comentarios={item.comentarios}
              addComentario={addComentario}
            />
          </Fragment>
        }
      />
    </ScrollView>
  )
};

Feed.navigationOptions = ({navigation}) => {
  return {title: navigation.getParam("usuario")}
}

export default Feed;
