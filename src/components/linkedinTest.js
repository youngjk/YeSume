import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './linkedinTest.css'
import {Modal_test} from '../components/Modal_test'

export const Linkedintest = ({data}) => {
  const [position, setPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  function onScroll(){
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [])

  return (
    <div className="linkedin-container">
      <div className='profile-main'>
        <h1 style={{transform: `translateX(${-300 + position /2}px)`}}>Ugly Ugly Guy: {data.profile.name}</h1>
        <img style={{transform: `translateX(${-position + 1780 /3}px)`}} src={data.profile.imageurl} alt={data.profile.name} />
        <h2>{data.profile.headline}</h2>
        <h3>{data.profile.location}</h3>
        <p style={{opacity: (position - 450) / 100}}>{data.profile.summary}</p>
      </div>
      <div className='skills' style={{opacity: (position - 530) / 100}}>
        {data.skills.map( (skill, index) => {
          return (
            <span>
            {index === data.skills.length -1 ? `| ${skill.title} |` : `| ${skill.title} ` } 
            </span>
          )
        })}
      </div>
      <div className="company-background">
        <div className='company-container' style={{transform: `translateX(10px)`, opacity: (position - 1030) / 100 }}>
          {data.positions.map( (position, index) => {
            return(
              <div className='company-details' onClick={openModal} setShowModal={setShowModal} key={index + "k"}>
                <h3>{position.title}</h3>
                <h4>{position.companyName}</h4>
                <span>{position.date1}</span>
                <span>{position.date2}</span>
                <h5>{position.location}</h5>
                <Modal_test showModal={showModal} setShowModal={setShowModal} company={position.companyName} description={position.description}/>
              </div>
            )
          })}
        </div>
      </div>
      <div className='education-container'>
        {data.educations.map( (education, index) => {
          return(
            <div className='education-detail' key={index}>
              <h2>{education.title}</h2>
              <h3>{education.degree}</h3>
              <h3>{education.fieldOfStudy}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}
