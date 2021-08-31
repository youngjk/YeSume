import React from 'react';
import styled from 'styled-components';
import {profileData} from '../static/data/LinkedinData';

const MobileCareerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  h2{
    color: #fff;
    margin: 20px 0;
  }
  .info-title{
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 100%;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    padding: 30px 20px;
    margin: 35px 0;
    div{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p{
        font-size: 10px;
        margin: 10px 0 30px 0;
      }
      div{
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100%;
      }
    }
    p, h3{
      font-family: "Poppins";
      margin: 10px 0;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  color: #fff;
  background-color: #4000fe;
  border: none;
  margin: 0 5px;
  padding: 12px 60px;
`;

const TP_Button = styled.button`
  padding: 7px 40px;
  background-color: transparent;
  width: 100%;
  border: 3px solid #4741F1;
  color: #fff;
  font-family: "Poppins";
  cursor: pointer;
`;
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #D5D5D5;
  p {
    font-size: 10px;
    margin-bottom: 15px;
  }
  h3{
    color: #D5D5D5;
    font-family: "Poppins";
    margin-bottom: 15px;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #D5D5D5;
    h4{
      margin-bottom: 15px;
    }
  }
`;

function CareerMobileInfo() {
  // Functions require here 
  // - API request to Github & Linkedin
  // - Function handles toggle event
  return (
    <MobileCareerInfo>
      <img src={"images/youngjin_mobile_profile.png"} alt={"profile picture"} />
      <h2>YOUNGJIN KIM</h2>
      <ButtonContainer>
        <Button>LINKEDIN</Button>
        <Button>GITHUB</Button>
      </ButtonContainer>
      <div className={"info-title"}>
        <h3>Platform Engineer at VerticalScope Inc.</h3>
        <div>
          <div>
            <p>Waterloo, Ontario, Canada</p>
            <TP_Button>CONNECT</TP_Button>
          </div>
          <div>
            <p>242 connection</p>
            <TP_Button>MESSAGE</TP_Button>
          </div>
        </div>
      </div>
      <AboutWrapper>
        <h3>About</h3>
        <div>
          <h4>Profession</h4>
          <p>{profileData.profile.summary}</p>
        </div>
        <div>
          <h4>Strengths/Interests</h4>
          <p>Platform | Infrastructure | DevOPs | Automation | Reliability</p>
        </div>
        <div>
          <h4>Investment Sector</h4>
          <p>Cloud | 5G | Financial | Renewable Energy | Plant Based Diet | IoT | VR/AR</p>
        </div>
        <p>Feel free to reach out as I love talking about any of the above!</p>
      </AboutWrapper>
    </MobileCareerInfo>
  )
}

export default CareerMobileInfo
