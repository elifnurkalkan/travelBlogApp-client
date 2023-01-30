import React from 'react';
import './landing.css';
import { useState, useRef, useEffect } from 'react';
import t1 from '../../travelLanding/t1.jpeg';
import t2 from '../../travelLanding/t2.jpeg';
import t3 from '../../travelLanding/t3.jpeg';
import t4 from '../../travelLanding/t4.jpeg';
import Topbar from '../topbar/Topbar';
import Button from '../landingButton/Button';

export default function Landing() {
  const images = [t1, t2, t3, t4];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });

  return (
    <>
      <div className="imgWrapper">
        <h1 className="landingText">
          “I haven't been everywhere, but it's on my list.”
        </h1>
        {images?.map((img, index) => {
          return (
            <img
              alt=""
              src={img}
              className={
                index === currentSlide ? 'imageActive homeImage' : 'image'
              }
            />
          );
        })}
      </div>
      <Button />
    </>
  );
}
