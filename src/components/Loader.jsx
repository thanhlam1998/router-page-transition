// @ts-nocheck
import React, { useEffect } from "react";
import Image from "./Image";
import { motion } from "framer-motion";

import image1 from "../images/image-1.jpg";
import image1Webp from "../images/image-1.webp";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image3Webp from "../images/image-3.webp";
import image4 from "../images/image-4.jpg";
import image4Webp from "../images/image-4.webp";
import image5 from "../images/image-5.jpg";
import image5Webp from "../images/image-5.webp";

const container = {
  show: {
    transition: {
      staggerChildren: 0.45,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}>
        <ImageBlock variants={item} id="image-1" src={image1} fallback={image1Webp} />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img src={image2} alt="random alt" layoutId="main-image-1" transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }} />
        </motion.div>
        <ImageBlock variants={item} id="image-3" src={image3} fallback={image3Webp} />
        <ImageBlock variants={item} id="image-4" src={image4} fallback={image4Webp} />
        <ImageBlock variants={item} id="image-5" src={image5} fallback={image5Webp} />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, src, fallback, variants }) => {
  return (
    <motion.div className={`image-block ${id}`} variants={variants}>
      <Image src={src} fallback={fallback} alt={id} />
    </motion.div>
  );
};

export default Loader;
