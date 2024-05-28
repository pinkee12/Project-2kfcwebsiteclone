import React, { useEffect, useState } from "react";
import "./Style.css";

import banner1 from "../../assets/Banners/1.png";


const Carousel = () => {
  const arr = [banner1,];
  const [imgNumber, setImgNumber] = useState(0);
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (i === arr.length) {
        i = 0;
      }
      setImgNumber(i);
      i++;
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='Carousel-Main-Contianer'>
      <div className='carouselBody'>
        <img src={arr[imgNumber]} alt='' className='carouselImg' />
      </div>
    </div>
  );
};

export default Carousel;
