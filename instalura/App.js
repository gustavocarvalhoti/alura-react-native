import React, {Fragment, useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Cabecalho} from "./src/components/cabecalho";
import {Foto} from "./src/components/foto";
import lerFotos from './src/api/feed';
import {Comentarios} from "./src/components/comentario";

/*
const informacoes = [
  {id: 1, usuario: "Gustavo", foto: "gustavo.jpg"},
  {id: 2, usuario: "Mi", foto: "mi.jpg"},
  {id: 3, usuario: "Duda", foto: "duda.jpg"},
  {id: 4, usuario: "Davi", foto: "davi.jpg"},
];
 */

const App = () => {
  // Inicia com arrays vazio - [objeto, como alterar]
  const [fotos, setFotos] = useState([]);

  // Quando o componente estiver pronto para ser desenhado, não pode retornas nada, só executa funções
  // Toda vez que redesenhar a tela
  useEffect(() => {
    // Função dentro de outra função
    lerFotos(setFotos);
  },[]);

  return (
    <ScrollView>
      {
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
              />
              <Comentarios comentarios={item.comentarios}/>
            </Fragment>
          }
        />
      }
    </ScrollView>
  )
};

export default App
