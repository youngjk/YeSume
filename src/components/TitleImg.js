import React from 'react'
import './TitleImg_style.css'

export const TitleImg = () => {
  return (
    <div class ="background">
      <div class="landing-main">
        <div class="main-heading">
          <h2>
            Young Jin Kim
          </h2>
          <h1>
            Full-Stack
          </h1>
          <h1>
            Developer
          </h1>
          <h3>
            Based in Toronto, Canada
          </h3>
        </div>
        
        <div class="main-img-container">
        <img class="main-img" src={"../../images/LandingPage.png"}
          alt="Planet"/>
        </div>
      </div>
    </div>
  )
}
