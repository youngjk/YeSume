import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./index.css";
import FinanceModal from "../components/Finance_Modal";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url("images/finance/background_coin.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 3500px;
  width: 100%;
  scroll-behavior: smooth;
`;

const CoinContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;
  width: 90%;
  height: 100%;
`;

const CoinImage = styled.img`
  position: absolute;
  width: 15%;
  transform: translateY(${(props) => props.positionY}px)
    rotate(${(props) => props.positionY * 0.003}rad);
  opacity: ${(props) => 1 - props.positionY / 2300};
  display: ${(props) => (1 - props.positionY / 2300 < 0 ? `none` : `flex`)};
  transition: all 0.8s;
  :hover {
    transform: translateY(${(props) => props.positionY - 100}px);
  }
  ${(props) =>
    props.top_bitcoin &&
    css`
      content: url("images/finance/top_bitcoin.png");
      top: 5%;
      right: 4%;
      z-index: 2;
    `}
  ${(props) =>
    props.top_house &&
    css`
      content: url("images/finance/top_house.png");
      top: 20%;
      left: 3%;
    `}
    ${(props) =>
    props.top_dollar &&
    css`
      content: url("images/finance/top_dollar.png");
      top: 3%;
      left: 1%;
      z-index: 2;
    `}
    ${(props) =>
    props.top_jordan &&
    css`
      content: url("images/finance/top_jordan.png");
      top: 16%;
      left: 42%;
    `}
    ${(props) =>
    props.top_stock &&
    css`
      content: url("images/finance/top_stock.png");
      top: 20%;
      right: 10%;
    `}
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  color: #fff;
  z-index: 1;
  h1 {
    font-size: 80px;
    margin-bottom: 30px;
    letter-spacing: 5px;
  }
  p {
    font-family: "Poppins";
    text-align: center;
    font-size: 18px;
    width: 30%;
    letter-spacing: 2px;
  }
`;

const Info_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 8% 0 0 0;
  z-index: 3;
  > h1 {
    overflow: hidden;
    text-align: center;
    color: #d5d5d5;
    width: 70%;
    letter-spacing: 3px;
    margin: 50px 0 80px 0;
  }
  > h1:before,
  > h1:after {
    background-color: #d5d5d5;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  > h1:before {
    right: 2em;
    margin-left: -50%;
  }

  > h1:after {
    left: 2em;
    margin-right: -50%;
  }
`;

const Sector_Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 700px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4417d0;
    color: #d5d5d5;
    font-size: 32px;
    height: 100%;
    width: 23%;
    margin: 0 2px;
  }
`;

const Post_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const Post = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #d5d5d5;
  width: 60%;
  margin-bottom: 75px;
  * {
    font-family: "Poppins";
  }
  img {
    width: 40%;
    margin-right: 60px;
  }
  div {
    width: 60%;
    h2,
    h3 {
      letter-spacing: 1.5px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 30px;
    }
    p > span {
      color: #00ff90;
      margin-left: 8px;
    }
  }
`;

function Finance() {
  const [positionY, setPositionY] = useState(0);

  const onScroll = () => {
    setPositionY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <MainContainer>
        <CoinContainer>
          <CoinImage positionY={positionY * 1.2} top_bitcoin />
          <CoinImage positionY={positionY * 1.8} top_house />
          <CoinImage positionY={positionY * 1.4} top_dollar />
          <CoinImage positionY={positionY * 1.7} top_jordan />
          <CoinImage positionY={positionY * 1.2} top_stock />
        </CoinContainer>
        <Navbar />
        <TitleContainer>
          <h1>INVESTMENT</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </TitleContainer>
        <Info_Container>
          <h1>SECTOR</h1>
          <Sector_Grid>
            <div>ENERGY</div>
            <div>TECH</div>
            <div>FOOD</div>
            <div>FASHION</div>
          </Sector_Grid>
        </Info_Container>
        <Info_Container>
          <h1>RECENT POST</h1>
          <Post_Container>
            <Post>
              <img src={"images/finance/mock-chart.png"} />
              <div>
                <h2>Li-Cycle Holdings Corp (LICY)</h2>
                <p>
                  11.56 <span>+0.41 (+3.68%)</span>
                </p>
                <h3>Post Header</h3>
                <p>Post Description</p>
              </div>
            </Post>
            <Post>
              <img src={"images/finance/mock-chart.png"} />
              <div>
                <h2>Peak Fintech Group (PKKFF)</h2>
                <p>
                  8.35 <span>+0.42 (+5.30%)</span>
                </p>
                <h3>Post Header</h3>
                <p>Post Description</p>
              </div>
            </Post>
          </Post_Container>
          <FinanceModal />
        </Info_Container>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Finance;
