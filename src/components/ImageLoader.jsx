import React from "react";

const ImageLoader = ({src, alt, fallbackImg, ...rest}) => {
  const onError = ({target}) => {
    target.src = fallbackImg;
  };
  return <img src={src} onError={onError} alt={alt} {...rest} />;
};

export default ImageLoader;
