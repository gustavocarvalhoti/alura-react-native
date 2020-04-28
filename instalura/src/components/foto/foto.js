import React, {Fragment, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import estilo from './estilo';
import {imgLike, curtirFoto} from '../../api/curtidas';

const Foto = ({urlFoto, descricao, quantidadeLikes}) => {
  const [curtiu, setCurtiu] = useState(false);

  const [likes, setLIke] = useState(quantidadeLikes);

  const clicouCurtir = () => {
    const [curtiuReult, quantidadeResult] = curtirFoto(curtiu, likes);
    setLIke(quantidadeResult);
    setCurtiu(curtiuReult);
  };

  return (
    <Fragment>
      <Image source={{uri: urlFoto}} style={estilo.imagem}/>
      <Text style={estilo.comentario}>{descricao}</Text>
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={clicouCurtir}>
          <Image source={imgLike(curtiu)} style={estilo.like}/>
        </TouchableOpacity>
        <Text>{likes}</Text>
      </View>
    </Fragment>
  );
}



export default Foto;
