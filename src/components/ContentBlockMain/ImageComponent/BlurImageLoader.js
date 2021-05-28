import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WrapperLoadableImage = styled.div`
  overflow: hidden;
 background-color: transparent !important;
`;

const LoadableImage = styled.div`
  width: 100%;
  height: 0;
  transition: 0.3s filter ease-in-out;
  /* Blur Effect */
  /* filter: ${props => (!props.loaded ? "blur(15px)" : "unset")}; */
  /*  */
  /* Pixelated Effect */
  image-rendering: ${props => (!props.loaded ? "pixelated" : "unset")};
  image-rendering: ${props => (!props.loaded ? "crisp-edges" : "unset")};
  /* filter: grayscale(100%); */
  /*  */
  padding-top: ${props => props.ratio}%;
  background-image: url(${props => props.src});
  background-position: 100% auto;
  background-origin: border-box;
  background-size: contain;
`;

export const BlurImageLoader = ({ placeholder, image, ...props }) => {
  const runOnce = true;
  const [loadState, setLoadState] = useState({
    src: placeholder,
    loaded: false
  });

  useEffect(() => {
    const img = new Image();

    img.onload = function() {
      setLoadState({
        src: img.src,
        loaded: true
      });
    };

    img.src = image;
  }, [image, runOnce]);

  return (
    <WrapperLoadableImage>
      <LoadableImage {...props} {...loadState} />
    </WrapperLoadableImage>
  );
};
