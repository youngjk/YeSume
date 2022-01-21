import React from 'react';
import styled, { keyframes } from 'styled-components';
import { data } from '../static/data/InvestImages';

const rotate = keyframes`
      from{
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg);
      }
    }
`;

const Stage = styled.div`
  position: relative;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: rgba(0, 0, 33, 1);
  perspective: 1000px;
  * {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: #fff;
    font-size: 2.5em;
    z-index: 1;
  }
  @media (min-width: 768px) {
    height: 600px;
  }
`;

const Circle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 3px solid #9dfbff;
  transform-style: preserve-3d;
  transform: rotateY(90deg) rotateX(45deg) rotateY(-45deg);
  @media (max-width: 425px) {
    width: 90vw;
    height: 90vw;
  }
`;

const SymbolWapper = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid #9dfbff;
  transform: rotateX(${props => props.rotateX || '45deg'})
    rotateY(${props => props.rotateY || '20deg'})
    rotateZ(${props => props.rotateZ || '0deg'});
  @media (max-width: 425px) {
    width: 90vw;
    height: 90vw;
  }
`;

const SymbolAnimator = styled.div`
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${rotate} 15s linear infinite;
  @media (max-width: 425px) {
    width: 90vw;
    height: 90vw;
  }
`;

const Symbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transform-style: preserve-3d;
  position: absolute;
  width: 100px;
  height: 100px;
  //animation: ${rotate} 3s linear infinite alternate;
  img {
    width: 100%;
    height: 100%;
  }

  div {
  }

  &:nth-child(1) {
    transform: rotateX(270deg) translateZ(252px);
    @media (max-width: 425px) {
      transform: rotateX(270deg) translateZ(47vw);
    }
  }
  &:nth-child(2) {
    transform: rotateX(270deg) rotateY(72deg) translateZ(252px);
    @media (max-width: 425px) {
      transform: rotateX(270deg) rotateY(72deg) translateZ(47vw);
    }
  }
  &:nth-child(3) {
    transform: rotateX(270deg) rotateY(144deg) translateZ(252px);
    @media (max-width: 425px) {
      transform: rotateX(270deg) rotateY(144deg) translateZ(47vw);
    }
  }
  &:nth-child(4) {
    transform: rotateX(270deg) rotateY(216deg) translateZ(252px);
    @media (max-width: 425px) {
      transform: rotateX(270deg) rotateY(216deg) translateZ(47vw);
    }
  }
  &:nth-child(5) {
    transform: rotateX(270deg) rotateY(288deg) translateZ(252px);
    @media (max-width: 425px) {
      transform: rotateX(270deg) rotateY(288deg) translateZ(47vw);
    }
  }
`;

const FinanceMobileMain = () => {
  return (
    <Stage>
      <h1>INVESTMENT</h1>
      <Circle>
        <SymbolWapper rotateX={'90deg'} rotateY={'30deg'} />
        <SymbolWapper rotateX={'180deg'} rotateY={'30deg'} />
        <SymbolWapper>
          <SymbolAnimator>
            {data.map((images, index) => {
              return (
                <Symbol>
                  <img src={images.path} alt={images.alt} />
                </Symbol>
              );
            })}
          </SymbolAnimator>
        </SymbolWapper>
      </Circle>
    </Stage>
  );
};

export default FinanceMobileMain;
