import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import "./index.css"
export default function Home() {
  return (
    <div class="mainCon">

      {/* Sticky Nav Bar */}
      <Navbar />

      {/* Biography */}
      <div class="flexCon">
        <div>
          <div class="textBox">
            <h2>Hello</h2>
            <p>
              My name is <span>Young Jin Kim</span>
            </p>
            <p>
              {/* Random Text*/}
              Back-end developer based in Toronto,
              Canada. There are several tools and platforms (wordpress, magento etc..)
              available that can be used to develop the front end of a website,
              and understanding which tools are best fit for specific tasks marks
              the difference between developing a hacked site and a well designed,
              scalable site
            </p>
          </div>
        </div>
        {/* Main Image 1*/}
        <div class="main_Image1"></div>
      </div> {/* End of Biography Container*/}

      {/* Career Container*/}
      <div class="flexCon2">
        <div>
          <h2>Career</h2>
          {/* random Text */}
          <p id="colored_p">
            Backend developer focuses on databases, scripting,
            and the architecture of websites.
            Code written by back-end developers
            helps to communicate the database
            information to the browser. Hyper Text Markup Language (HTML)
            is the backbone of any website development process,
            without which a web page does not exist.
            Hypertext means that text has links, termed hyperlinks,
            embedded in it. When a user clicks on a word or a phrase
            that has a hyperlink, it will bring another web-page.
            A markup language indicates text can be turned into images,
            tables, links, and other representations.
            It is the HTML code that provides an overall
            framework of how the site will look. HTML was developed by
            Tim Berners-Lee. The latest version of HTML is called HTML5
            and was published on October 28, 2014 by the W3 recommendation.
            This version contains new and efficient ways of
            handling elements such as video and audio files.
            </p>
        </div>
      </div> {/* End of Career Container*/}

      {/* Mock Container */}
      <div class="flexCon">

        <div>Image3</div>

        <div>Social Media</div>

      </div>

      {/* Mock Footer */}
      <Footer />
    </div>
  )
}
