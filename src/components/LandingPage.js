import React from 'react'
import './LandingPage_style.css'

export const LandingPage = () => {
  return (
    <div class="Landing_Main">
      <div class="Main_Heading">
        <h2>
          Young Jin Kim
        </h2>
        <h1>
          Full-Stack<br/>
          Developer
        </h1>
        <h3>
          Based in Toronto, Canada
        </h3>
      </div>
      <div class="Main_ImgContainer">
      <img class="Main_Img" src={"../../images/LandingPage.png"}
        alt="Main Image"></img>
      </div>
    </div>
  )
}