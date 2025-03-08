import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`,
  );

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setCurrentSrc(src);
  }, [src]);

  return (
    <img
      className={currentSrc === src ? className : `$(className} blur-xl`}
      src={currentSrc}
      width={width}
      height={height}
      alt="image"
    />
  );
};

export default ImageComponent;
