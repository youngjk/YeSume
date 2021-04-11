import React,{useState, useEffect} from 'react'
import './Career_slider_test.css'

export const CareerSliderTest = ({images}) => {
  return (
    <div id="test" className="animate career-slider-container">
      {images.map((image, index) => {
        return(
          <img className="career-slider-image" src={image.src} alt={image.name} key={index + "key"}/>
        )
      })}
      {images.map((image, index) => {
        return(
          <img className="career-slider-image" src={image.src} alt={image.name} key={index + "key2"}/>
        )
      })}
    </div>
  )
}
