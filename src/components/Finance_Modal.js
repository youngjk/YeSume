import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1650px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 80%;
  border: 1px solid #1ecc8c;
  color: #fff;
  * {
    font-family: "Poppins";
  }
`;
const ModalWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  margin-bottom: 30px;
  .highlight {
    color: #8459f9;
    letter-spacing: 3px;
    margin-right: 75px;
    font-size: 24px;
    font-weight: 700;
  }
`;

const PostTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 48px;
  word-spacing: 5px;
  letter-spacing: 3.5px;
`;

const Price = styled.div`
  margin-bottom: 15px;
  span:first-child {
    font-size: 42px;
    margin-right: 30px;
  }
  .highlight {
    color: #00ff90;
    font-size: 32px;
    letter-spacing: 3px;
  }
`;

const Date = styled.div`
  margin-bottom: 15px;
`;

const PostContents = styled.div`
  margin-bottom: 50px;
  img {
    width: 100%;
    margin-bottom: 30px;
  }
  div {
    letter-spacing: 2px;
    line-height: 35px;
  }
`;

const MorePosts = styled.div`
  img {
    border-radius: 20px;
    width: 250px;
    margin-bottom: 5px;
  }
  h3 {
    letter-spacing: 1.5px;
    font-size: 24px;
    margin-bottom: 30px;
  }
  > div {
    display: flex;
    flex-direction: row;
    div {
      margin-right: 100px;
    }
  }
`;

function FinanceModal({ display, onClose }) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <Header>
          <span className="highlight">TECH - 5G</span>
          <span>posted 2 days ago</span>
        </Header>
        <PostTitle>Nokia Corporation (NOK)</PostTitle>
        <Price>
          <span>5.43</span>
          <span className="highlight">+0.01(+0.18%)</span>
        </Price>
        <Date>2021, Oct 15th</Date>
        <PostContents>
          <img src={"images/finance/mock-chart.png"} alt="mock-chart" />
          <div>
            HMD Global has re-released the Nokia 6310, a smartphone that
            originally launched 20 years ago. Unsurprisingly, the new model
            contains a few upgrades on its classic sibling. However, it also
            looks nothing like it and bears a closer resemblance to the revised
            Nokia 3310. Supposedly, the Nokia 6310 retains 'iconic silhouette of
            the original', despite being 6.5 mm taller, 9 mm wider, and 6.9 mm
            thinner than its predecessor. HMD Global has replaced the original's
            tiny display with a 2.8-inch one too, which runs at 320 x 240 pixels
            (QVGA). Additionally, the device has 8 MB of expandable storage, 16
            MB of RAM and a 1,150 mAh battery. The Unisoc 6531F-powered handset
            also has a 3.5 mm jack, a Micro USB port and an FM radio.
            Furthermore, HMD Global has included two SIM card slots and a 0.3 MP
            rear-facing camera complemented by a small torch. The Nokia 6310
            runs the ageing Series 30+ OS, which debuted in 2013, and comes with
            Snake pre-installed. HDM Global's marketing assets imply that the
            Nokia 6310 will be available in black, green and yellow. Currently,
            the device is only purchasable in black or yellow though, both
            retailing for £59.99.
          </div>
        </PostContents>
        <MorePosts>
          <h3>More Posts</h3>
          <div>
            <div>
              <img src={"images/finance/mock-chart.png"} alt="mock-chart" />
              <p>Post Title</p>
            </div>
            <div>
              <img src={"images/finance/mock-chart.png"} alt="mock-chart" />
              <p>Post Title</p>
            </div>
          </div>
        </MorePosts>
      </ModalWrapper>
    </ModalContainer>
  );
}

export default FinanceModal;
