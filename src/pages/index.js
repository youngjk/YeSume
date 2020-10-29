import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import './index.css'
import { TitleImg } from '../components/TitleImg'
import { Experience } from '../components/Experience'

export default function Home() {
  return (
    <div class="index-container">
      <Navbar />
      <TitleImg />
      <Experience />
      <Footer />
    </div>
  )
}
