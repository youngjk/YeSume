import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { TitleImg } from '../components/TitleImg'
import { Experience } from '../components/Experience'
import {Contact} from '../components/Contact'
import './index.css'


export default function Home() {
  return (
    <div className="index-container">
      <div className="title-background">
        <Navbar />
        <TitleImg />
      </div>
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
