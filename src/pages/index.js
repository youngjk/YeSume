import React from 'react'
import { Navbar } from '../components/Navbar'
import "./index.css"
export default function Home() {
  return (
    <div>
      <h1>MAIN PAGE</h1>
      <Navbar />
      <div class="flexCon">
        <div>
          <h1>Hello</h1>
          <p>practice</p>
        </div>
        <div>Image</div>
      </div>
    </div>
  )
}
