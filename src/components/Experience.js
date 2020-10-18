import React from 'react'
import './Experience_style.css'

export const Experience = () => {
  return (
    <div class ="Experience">
      <h1>Experience</h1>

      <div class = "Container" id ="Border">
        <div class = "Img_Con">
          <img class="Exp_Img" src={"../../images/Verticalscope.png"}
          alt="Vertical Scope Image"></img>
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

    <div class="Container">
        <div id ="Text_Right">
          <h2>Universe</h2>
          <h3>Dev-ops Developer</h3>
          <p>
            Ownership over Platform and DevOps 
            in Universe. Developed and maintained a 
            modern cloud  infrastructure on GCP.
          </p>
          <button>Learn More</button>
        </div>
        <div class = "Img_Con">
          <img class="Exp_Img" src={"../../images/Universe.png"}
          alt="Universe Image"></img>
        </div>
      </div>

      <div class = "Container" id ="Border">
        <div class = "Img_Con">
          <img class="Exp_Img" src={"../../images/Universe_FullStack.png"}
          alt="Universe Full Stack Image"></img>
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

      <div Class="Container">
        <div id ="Text_Right">
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
        <div class = "Img_Con">
          <img class="Exp_Img" src={"../../images/Flybits.png"}
          alt="Flybits Image"></img>
        </div>
      </div>

      <div class = "Container" id ="Border">
        <div class = "Img_Con">
          <img class="Exp_Img" src={"../../images/Klick.png"}
          alt="Klick Inc Image"></img>
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
