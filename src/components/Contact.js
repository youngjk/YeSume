import React from 'react'
import '../CSS/Contact_style.css'

export const Contact = () => {
  return(
    <div className="contact">
      <img className="satelite-img" src={"images/satelite.png"} alt="satelite"/>
      <div className="contact-text">
        <h2>LET'S SYNC</h2>
        <p>
          Lets work together to creat game-changing experiences
          that will take your brand from bland to buzzworthy.
        </p>
      </div>
      <div className="contact-link">
        <a href="https://github.com">
          <img id="github" src={"images/github.png"} alt="github" />
        </a>
        <a href="https://instagram.com">
          <img id="instagram" src={"images/instagram.png"} alt="instagram" />
        </a>
        <a href="https://linkedin.com">
          <img id="linkedin" src={"images/linkedin.png"} alt="linkedin" />
        </a>
        <a href="https://facebook.com">
          <img id="facebook" src={"images/facebook.png"} alt="facebook" />
        </a>
      </div>
    </div>
  )
}
