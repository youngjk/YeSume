import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {profileData} from '../static/data/LinkedinData';
import {IoPeople} from 'react-icons/io5';
import {FaStar} from 'react-icons/fa';
import useAxios from 'axios-hooks';
import moment from 'moment';

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
  display: flex;
  flex-direction: row;
  width: 100%;
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
const GitButtonContainer = styled.div`
  width: 30%;
  button{
    margin-bottom: 10px;
  }
  button.active{
    background-color: #4741F1;
  }
`;

const GitInfoContainer = styled.div`
  width: 70%;
 
`;

const RepoContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 0 30px;
  a{
    color: #F37957;
    text-decoration: none;
    font-family: "Helvetica";
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  ul{
    list-style: none;
  }
  ul li{
    color: #D5D5D5;
    font-family: "Poppins";
    font-size: 12px;
  }
`;

const RepoList = styled.div`
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
  width: 100%;
  border: 3px solid #4741F1;
  color: #fff;
  font-family: "Poppins";
  cursor: pointer;
`;

export const GithubInfo = () => {
  const [{ data, loading, error }, refetch] = useAxios("https://api.github.com/users/youngjk/repos");
  const [{response, isLoading, error2} ,refetch2] = useAxios("https://api.github.com/users/youngjk/events/public");
  const [switchDisplay, setSwitchDisplay] = useState(false);
  const [current, setCurrent] = useState("Repo");
  const [commitData , setCommitData] = useState([]);
  const [commitIsLoading, setCommitIsLoading] = useState(true);
  const getCommitData = (commitResponse) => {
    let dataList = [];
    for(let i = 0; i < commitResponse.length; i ++){
      if(commitResponse[i].type === "PushEvent"){
        dataList.push(commitResponse[i]);
      }
    }
    setCommitData(dataList);
    setCommitIsLoading(false);
  }

  const onClick = (event) => {
    if(event.target.name !== current){
      setSwitchDisplay(prev => !prev)
    }
    setCurrent(event.target.name);
  }
  useEffect(()=>{
    isLoading ? refetch2() : response ?? getCommitData(response);
  },[])
  return (
    <InfoWrapper>
      <img src={"/images/GitLogo.png"} style={{width:"100px", marginBottom: "60px"}}/>
      <ProfileWrapper>
        <img src={"/images/profilePic.jpeg"} style={{width:"100px",height:"100px",borderRadius:"50%", marginRight: "40px"}}/>
        <div>
          <h1>YOUNGJIN KIM</h1>
          <p>{profileData.profile.headline}</p>
          <div>
            <p><IoPeople/><span>120 Followers	&bull;</span><FaStar/><span>24 &bull; 12 Following</span></p>
          </div>
          <ButtonCon>
            <Button>FOLLOW</Button>
          </ButtonCon>
        </div>
      </ProfileWrapper>
      <AboutWrapper>
        <GitButtonContainer>
          <Button className={current === "Commit"? "active" : ""} name="Commit" onClick={onClick}>Commit</Button>
          <Button className={current === "Repo"? "active" : ""} name="Repo" onClick={onClick}>Repository</Button>
        </GitButtonContainer>
        <GitInfoContainer>
          <RepoContainer>
            { switchDisplay ?
            ( commitIsLoading ? <p>"Loading"</p> : commitData.map((commit, index) => {
              return <RepoList>
                      <a href={`https://github.com/${commit.repo.name}`} target="_blank">{commit.repo.name.replace('youngjk/',"")}</a>
                      <ul>
                        <li>{commit.payload.commits[0].message} </li>
                      </ul>
                    </RepoList>
            })) 
            :
              (loading ? "" : data.map((repo, index) => {
                return <RepoList key={`indexAt${index}`}>
                      <a href={`${repo.html_url}`} target="_blank">{repo.name}</a>
                      <ul>
                        <li>Created at: {moment(repo.created_at).format('MMM Do YY')}</li>
                        <li>Last Push: {moment(repo.pushed_at).format('MMM Do YY')}</li>
                      </ul>
                    </RepoList>
            }))}
          </RepoContainer>
        </GitInfoContainer>
      </AboutWrapper>
    </InfoWrapper>
  )
}
