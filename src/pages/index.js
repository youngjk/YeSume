import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import "./index.css"
export default function Home() {
  return (
    <div>

      <Navbar />

      <div class="flexCon">
        <div>
          <div class="TextBox">
            <h2>Hello</h2>
            <p>
              My name is <span>Young Jin Kim</span>
            </p>
            <p>
              Back-end developer based in Toronto,
              Canada
            </p>
          </div>
        </div>

        <div class="Main_Image1"></div>

      </div>

      <div class="flexCon2">
        <div>
          <h2>Career</h2>
          <p id="Colored_p">
            Backend developer focuses on databases, scripting,
            and the architecture of websites.
            Code written by back-end developers
            helps to communicate the database
            information to the browser.
            </p>
        </div>

      </div>

      <div class="flexCon">

        <div>Image3</div>

        <div>Social Media</div>

      </div>

      <Footer />
    </div>
  )
}
