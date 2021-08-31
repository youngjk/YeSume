import React from 'react'
import styled from 'styled-components';
import {profileData} from '../static/data/LinkedinData';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 40%;
  height: 900px;
  p,span {
    color: #D5D5D5;
    font-family: "Poppins"
  }
  p{
    margin: 5px 0;
  }
  span{
    margin: 0 7px;
  }
  h1{
    color: white;
    padding: 5px 0;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1.2px solid #fff;
  border-bottom: 1.2px solid #fff;
  padding: 30px 0;
  width: 100%;
`;

const AboutWrapper = styled.div`
  margin: 30px 0;
  height: 350px;
  h3{
    color: #D5D5D5;
    font-family: "Poppins";
    margin-bottom: 30px;
  }
  div{
    margin-bottom: 20px;
  }
`;

const ButtonCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 7px 40px;
  background-color: transparent;
  border: 3px solid #4741F1;
  color: #fff;
  font-family: "Poppins";
  cursor: pointer;
`;

export const LinkinInfo = () => {
  return (
    <InfoWrapper>
      <img src={"/images/LinkedinLogo.png"} style={{width:"100px", marginBottom: "60px"}}/>
      <ProfileWrapper>
        <img src={"/images/profilePic.jpeg"} style={{width:"100px",height:"100px",borderRadius:"50%", marginRight: "40px"}}/>
        <div>
          <h1>YOUNGJIN KIM</h1>
          <p>{profileData.profile.headline}</p>
          <div>
            <p>{profileData.profile.location}<span>{profileData.profile.connections}</span></p>
          </div>
          <ButtonCon>
            <Button>CONNECT</Button>
            <Button>MESSAGE</Button>
          </ButtonCon>
        </div>
      </ProfileWrapper>
      <AboutWrapper>
        <h3>About</h3>
        <div>
          <p>Profession</p>
          <p>{profileData.profile.summary}</p>
        </div>
        <div>
          <p>Strengths/Interests</p>
          <p>Platform | Infrastructure | DevOPs | Automation | Reliability</p>
        </div>
        <div>
          <p>Investment Sector</p>
          <p>Cloud | 5G | Financial | Renewable Energy | Plant Based Diet | IoT | VR/AR</p>
        </div>
        <p>Feel free to reach out as I love talking about any of the above!</p>
      </AboutWrapper>
    </InfoWrapper>
  )
}
