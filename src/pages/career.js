import React,{useEffect,useState} from 'react'
import { CareerSliderTest } from '../components/Career_slider_test'
import { Linkedintest } from '../components/linkedinTest'
import { Navbar } from '../components/Navbar'
import { profileData } from '../static/data/LinkedinData'
import {data} from '../static/data/mockImageData'
export default function Career() {
  const [position, setPosition] = useState(0);

  function onScroll(){
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [])
  return (
    <div className='career-page'>
      <Navbar />
      <div className='career-title-background' style={{backgroundPositionY: position / 3}}>
        <CareerSliderTest images={data}/>
      </div>
      <Linkedintest data={profileData}/>
    </div>
  )
}
