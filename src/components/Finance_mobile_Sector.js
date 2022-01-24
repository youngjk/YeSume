import React from 'react';
import styled from 'styled-components';

const SectorStage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
  padding: 50px 0 0 0;
  background-color: rgba(0, 0, 33, 1);
  color: #fff;
  h1 {
    color: #fff;
    width: 70%;
    margin-bottom: 60px;
  }
`;

const SectorContainer = styled.div`
  display: flex;
  padding: 20px 10px;
  width: 70%;
  background-color: ${props => (props.background ? props.background : '#fff')};
  border: ${props => (props.border ? props.border : 'none')};
  flex: 0.5;
  transition: 1s;
  border-radius: 30px 30px 0 0;
  :not(:first-child) {
    margin-top: -30px;
  }
  :hover {
    flex: 1.5;
  }
  h3 {
    margin-left: 65px;
    color: ${props => (props.background ? '#fff' : '#000')};
  }
`;
const PostContainer = styled.div`
  width: 70%;
  padding: 20px 10px;
  background-color: rgba(0, 0, 33, 1);
  border: 1px solid #9dfbff;
  border-radius: 30px 30px 0 0;
  flex: 6;
  transition: 1s;
  margin-top: -30px;
  h3 {
    margin-left: 65px;
    color: #fff;
  }
`;

const FinanceMobileSector = () => {
  return (
    <SectorStage>
      <h1>SECTORS</h1>
      <SectorContainer>
        <h3>Energy</h3>
      </SectorContainer>
      <SectorContainer background={'rgba(0, 0, 33, 1)'}>
        <h3>Tech</h3>
      </SectorContainer>
      <SectorContainer>
        <h3>Food</h3>
      </SectorContainer>
      <SectorContainer background={'rgba(0, 0, 33, 1)'}>
        <h3>Fashion</h3>
      </SectorContainer>
      <SectorContainer
        background={'rgba(0, 0, 33, 1)'}
        border={'1px solid #9dfbff'}
      >
        <h3>Related Post</h3>
      </SectorContainer>
      <PostContainer>
        <h3>POST</h3>
      </PostContainer>
    </SectorStage>
  );
};

export default FinanceMobileSector;
