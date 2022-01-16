// @ts-nocheck
import React, { useEffect } from "react";
import Image from "./Image";

import image1 from "../images/image-1.jpg";
import image1Webp from "../images/image-1.webp";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image3Webp from "../images/image-3.webp";
import image4 from "../images/image-4.jpg";
import image4Webp from "../images/image-4.webp";
import image5 from "../images/image-5.jpg";
import image5Webp from "../images/image-5.webp";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      <div className="loader-inner">
        <ImageBlock id="image-1" src={image1} fallback={image1Webp} />
        <div className="transition-image">
          <img src={image2} alt="random alt" />
        </div>
        <ImageBlock id="image-3" src={image3} fallback={image3Webp} />
        <ImageBlock id="image-4" src={image4} fallback={image4Webp} />
        <ImageBlock id="image-5" src={image5} fallback={image5Webp} />
      </div>
    </div>
  );
};

export const ImageBlock = ({ id, src, fallback }) => {
  return (
    <div className={`image-block ${id}`}>
      <Image src={src} fallback={fallback} alt={id} />
    </div>
  );
};

export default Loader;
