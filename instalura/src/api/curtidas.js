const imgLike = (curtiu) => {
  return curtiu
    ? require("../../resources/s2-checked.png")
    : require("../../resources/s2.png");
};

const curtirFoto = (curtiu, likes) => {
  let quantidade = likes;
  quantidade += (!curtiu ? 1 : -1);
  return [!curtiu, quantidade];
};

export {imgLike, curtirFoto};
