import React from 'react'
import './TitleImg_style.css'

export const TitleImg = () => {
  return (
    <div id ="container">
      <div className="landing-main">
        <div className="main-heading">
          <h2>
            Young Jin Kim
          </h2>
          <h1>
            PLATFORM
          </h1>
          <h1>
            ENGINEER
          </h1>
          <h3>
          Based in Toronto, Canada
          </h3>
        </div>
        <div className="main-img-container">
          <img className="main-img" src={"../../images/LandingPage.png"}
          alt="Planet"/>
        </div>
        <div className="hidden-heading">
        <h1>
            PLATFORM
          </h1>
          <h1>
            ENGINEER
          </h1>
          <h3>
          Based in Toronto, Canada
          </h3>
        </div>
      </div>
    </div>
  )
}
