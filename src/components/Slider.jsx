import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(2);

  let changer = setTimeout(() => {
    MoveRight();
  }, 3000);

  const MoveRight = () => {
    clearTimeout(changer);
    setTimeout(changer, 3000);
    currentImg >= slides.length - 1
      ? setCurrentImg(0)
      : setCurrentImg(currentImg + 1);
  };

  // window.setInterval(() => {
  //   console.log("Hello");
  // }, 3000);

  const MoveLeft = () => {
    clearTimeout(changer);
    setTimeout(changer, 3000);
    currentImg <= 0
      ? setCurrentImg(slides.length - 1)
      : setCurrentImg(currentImg - 1);
  };

  const gotoSlide = (slideIndex) => {
    setCurrentImg(slideIndex);
  };
  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${slides[currentImg].url})` }}
    >
      <div className="arrow Left" onClick={MoveLeft}>
        ⟨
      </div>
      <div className="arrow Right" onClick={MoveRight}>
        ⟩
      </div>
      <div className="options">
        {slides.map((slides, slideIndex) => (
          <div
            key={slideIndex}
            className="bulletOption"
            onClick={() => gotoSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
