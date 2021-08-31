import React, {useState} from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import '../CSS/Mobile_slider_style.css';

export const MobileSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const createDot = (sliderLength, current) => {
    const dot = [];
    for(let i = 0; i < sliderLength; i ++){
      dot.push(<span className= {i === current ? 'dot active' : 'dot'} key={i}></span>);
    }
    return dot;
  }

  // Check if the props is an array or have contents inside
  if(!Array.isArray(slides) || length <= 0){
    return null;
  }

  return (
  <div className="mobile-slider-container">
    <h1>Experience</h1>
    <IoIosArrowForward className='slider-next-btn' onClick={nextSlide}/>
    <IoIosArrowBack className='slider-prev-btn' onClick={prevSlide}/>
      {slides.map( (slide, index) => {
        return (<div className={index === current ? 'slider active': 'slider'}
                  key={index}>
                  {index === current && (
                    <div className='mobile-exp-container'>
                      <img className ='mobile-slider-image' src={slide.imageSrc} alt={slide.company} />
                      <div className= 'mobile-slider-dot'>
                        {createDot(slides.length, current)}
                      </div>
                      <h2>{slide.company}</h2>
                      <h3>{slide.position}</h3>
                      <p>{slide.description}</p>
                      <button className="learn-more-btn">Learn More</button>
                    </div>
                  )}
               </div>
               );
          })}
  </div>
  )
}
