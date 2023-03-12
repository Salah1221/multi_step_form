const ProloadedImg = ({ src }) => {
  const image = new Image();
  image.src = src;

  return <img src={src} />;
};

export default ProloadedImg;
