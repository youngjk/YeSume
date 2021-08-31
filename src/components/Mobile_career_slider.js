import React, {useState, useEffect, useRef} from 'react'
import {data} from '../static/data/ExperienceData'

export default function MobileCareerSlider() {
  const [position, setPosition] = useState(null);
  const [moving, setMoving] = useState(false);
  const [transform, setTransform] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [imgPostionList , setImgPositionList] = useState([]);
  const [imgContainerWidth, setImgContainerWidth] = useState(0);
  const slider = useRef();
  const imagesRef = useRef([]);

  function gestureStart(e){
    setPosition(e.pageX);
    setMoving(true);
    // get 'transform' css value from silder reference
    const transformMatrix = window.getComputedStyle(slider.current).transform;
    // if the silder has been moved
    if(transformMatrix !== "none"){
      // set transfrom(State) value to transformX(CSS value of the slider) value
      setTransform(parseInt(transformMatrix.split(',')[4].trim()));
    }
  }

  function gestureMove(e){
    // if the slider is moving
    if(moving){
      const currentPosition = e.pageX; // get current x point
      const diff = currentPosition - position; // calculate how much the slider had been moved
      setImgPositionList(imagesRef.current.map(el => el.getBoundingClientRect())); // get client DOMRect value for each image element in the slider 
      setImgContainerWidth(parseInt(imagesRef.current.map(el => window.getComputedStyle(el).width)[0].replace("px",""))) // get CSS width value for each image element in the slider
      slider.current.style.transform = `translateX(${transform + diff}px)`; // Move slider container 
    }
  }

  function gestureEnd(){
    setMoving(false);
  }

  useEffect(()=>{
    const sliderWidth = window.getComputedStyle(slider.current).width; // get silder contianer width
    setContainerWidth(parseInt(sliderWidth.replace("px",""))); // get slider container width
    setImgPositionList(imagesRef.current.map(el => el.getBoundingClientRect())) // get client DOMRect value for each image element in the slider 
  },[]);
  //
  return (
    <div id={"mobile-touch-slider"} onPointerDown={gestureStart} onPointerMove={gestureMove} onPointerUp={gestureEnd} ref={node => slider.current = node} style={{width:"100%"}}>
      {data.map((company, index) => {
        let halfImgCon = imgContainerWidth/2;
        let axis = (imgPostionList[index] ? imgPostionList[index].x + halfImgCon > (containerWidth/1.75) ? ((containerWidth/1.75) - ((imgPostionList[index].x + halfImgCon)- (containerWidth/1.75))) / (containerWidth/1.75) : (imgPostionList[index].x + halfImgCon)/ (containerWidth/1.75) : 1) * 100;
        return (
          <div className='info-container'>
            <img src={company.imageSrc} ref={node => imagesRef.current[index] = node} alt={company.company} data-index={index}  style={{width:`${axis + 150}%`, zIndex:`${axis > 90? 2: axis > 50? 1: -1}`}} />
          </div>)
      })}
    </div>
  )
}
