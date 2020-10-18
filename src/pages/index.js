import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import './index.css'
import { LandingPage } from '../components/LandingPage'
import { Experience } from '../components/Experience'

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Experience />
      <Footer />
    </div>
  )
}
