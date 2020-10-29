import React from 'react'
import './Experience_style.css'

export const Experience = () => {
  return (
    <div class ="experience">
      <h1>Experience</h1>

      <div class = "container" id ="border">
        <div class = "img-con">
          <img class="exp-img" src={"../../images/Verticalscope.png"}
          alt="Vertical Scope" />
        </div>
        <div>
          <h2>VerticalScope</h2>
          <h3>Platform engineer</h3>
          <p>
            Large scale cloud infrastructure architecture 
            and development. Exploring diverse fields of 
            platform and centralizing a core infrastructure 
            for all platforms on GCP.
          </p>
          <button>Learn More</button>
        </div>
      </div>

    <div class="container">
        <div id ="text-right">
          <h2>Universe</h2>
          <h3>Dev-ops Developer</h3>
          <p>
            Ownership over Platform and DevOps 
            in Universe. Developed and maintained a 
            modern cloud  infrastructure on GCP.
          </p>
          <button>Learn More</button>
        </div>
        <div class = "img-con">
          <img class="exp-img" src={"../../images/Universe.png"}
          alt="Universe" />
        </div>
      </div>

      <div class = "container" id ="border">
        <div class = "img-con">
          <img class="exp-img" src={"../../images/Universe_FullStack.png"}
          alt="Universe Full Stack" />
        </div>
        <div>
          <h2>Universe</h2>
          <h3>Full Stack Developer</h3>
          <p>
            Developed various features on a ticketing 
            platform across the entire platform fully on 
            end to end basis. Ranging from features 
            such as ticket waitlists to add-ons purchases.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      <div Class="container">
        <div id ="text-right">
          <h2>Flybits</h2>
          <h3>Software Developer</h3>
          <p>
            Developed a dev portal site which 
            contains the company’s core API dashboard 
            and various information for developers 
            around company’s core API.
          </p>
          <button>Learn More</button>
        </div>
        <div class = "img-con">
          <img class="exp-img" src={"../../images/Flybits.png"}
          alt="Flybits" />
        </div>
      </div>

      <div class = "container" id ="border">
        <div class = "img-con">
          <img class="exp-img" src={"../../images/Klick.png"}
          alt="Klick Inc" />
        </div>
        <div>
          <h2>Klick Inc</h2>
          <h3>Web Developer</h3>
          <p>
            Developed various pixel perfect client request 
            basis web sites. These sites were fully responsive 
            across multiple devices with beautiful custom 
            designs. Exposure to extensive browser 
            and os specific support for websites.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}
