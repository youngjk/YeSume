import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Mobile_slider_style.css';

export const MobileSlider = () => {
  return (
  <div className="mobile-slider-container">
    <h1>Experience</h1> 
    <AwesomeSlider
      animation="foldOutAnimation"
      className="mobile-slider"
    >
      <div className="mobile-slider-element">
        <div className="img-con">
          <img className="exp-img" src={"../../images/Verticalscope.png"}
          alt="Vertical Scope" />
        </div>
        <h2>VerticalScope</h2>
        <h3>Platform engineer</h3>
        <p>
          Large scale cloud infrastructure architecture 
          and development. Exploring diverse fields of 
          platform and centralizing a core infrastructure 
          for all platforms on GCP.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="mobile-slider-element">
        <div className="img-con">
          <img className="exp-img" src={"../../images/Universe.png"}
          alt="Universe" />
        </div>
        <h2>Universe</h2>
        <h3>Dev-ops Developer</h3>
        <p>
          Ownership over Platform and DevOps 
          in Universe. Developed and maintained a 
          modern cloud  infrastructure on GCP.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="mobile-slider-element">
        <div className="img-con">
          <img className="exp-img" src={"../../images/Universe_FullStack.png"}
          alt="Universe Full Stack" />
        </div>
        <h2>Universe</h2>
        <h3>Full Stack Developer</h3>
        <p>
          Developed various features on a ticketing 
          platform across the entire platform fully on 
          end to end basis. Ranging from features 
          such as ticket waitlists to add-ons purchases.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="mobile-slider-element">
        <div className="img-con">
          <img className="exp-img" src={"../../images/Flybits.png"}
          alt="Flybits" />
        </div>
        <h2>Flybits</h2>
        <h3>Software Developer</h3>
        <p>
          Developed a dev portal site which 
          contains the company’s core API dashboard 
          and various information for developers 
          around company’s core API.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="mobile-slider-element">
        <div className="img-con">
          <img className="exp-img" src={"../../images/Klick.png"}
          alt="Klick Inc" />
        </div>
        <h2>Klick Inc</h2>
        <h3>Web Developer</h3>
        <p>
          Developed various pixel perfect client request 
          basis web sites. These sites were fully responsive 
          across multiple devices with beautiful custom 
          designs. Exposure to extensive browser 
          and os specific support for websites.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </AwesomeSlider>
  </div>
  )
}
