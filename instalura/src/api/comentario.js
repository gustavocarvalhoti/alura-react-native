const addComentario = (comentario, usuario) => {
  return {
    date: Date.now(),
    text: comentario,
    userName: usuario
  };
};

export {addComentario};
