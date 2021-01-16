import React from 'react'
import './Contact_style.css'

export const Contact = () => {
  return(
    <div className="contact">
      <img className="satelite-img" src={"../../images/satelite.png"} />
      <div className="contact-text">
        <h2>LET'S SYNC</h2>
        <p>
          Lets work together to creat game-changing experiences
          that will take your brand from bland to buzzworthy.
        </p>
      </div>
      <div className="contact-link">
        <a href="#">
          <img id="github" src={"../../images/github.png"} alt="github image" />
        </a>
        <a href="#">
          <img id="instagram" src={"../../images/instagram.png"} alt="instagram image" />
        </a>
        <a href="#">
          <img id="linkedin" src={"../../images/linkedin.png"} alt="linkedin image" />
        </a>
        <a href="#">
          <img id="facebook" src={"../../images/facebook.png"} alt="facebook image" />
        </a>
      </div>
    </div>
  )
}
