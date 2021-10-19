import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  height: 1000px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.9);
  width: 80%;
  border: 1px solid red;
  color: #fff;
  * {
    font-family: "Poppins";
  }
`;

const Header = styled.div``;

const PostTitle = styled.h1``;

const Price = styled.div``;

const Date = styled.div``;

const PostContents = styled.div``;

const MorePosts = styled.div``;

function FinanceModal() {
  return (
    <ModalContainer>
      <Header>
        <span>TECH - 5G</span>
        <span>posted 2 days ago</span>
      </Header>
      <PostTitle>Nokia Corporation (NOK)</PostTitle>
      <Price>
        <span>5.43</span>
        <span>+0.01(+0.18%)</span>
      </Price>
      <Date>2021, Oct 15th</Date>
      <PostContents>
        <img src={"images/finance/mock-chart.png"} alt="mock-chart" />
        <div>
          HMD Global has re-released the Nokia 6310, a smartphone that
          originally launched 20 years ago. Unsurprisingly, the new model
          contains a few upgrades on its classic sibling. However, it also looks
          nothing like it and bears a closer resemblance to the revised Nokia
          3310. Supposedly, the Nokia 6310 retains 'iconic silhouette of the
          original', despite being 6.5 mm taller, 9 mm wider, and 6.9 mm thinner
          than its predecessor. HMD Global has replaced the original's tiny
          display with a 2.8-inch one too, which runs at 320 x 240 pixels
          (QVGA). Additionally, the device has 8 MB of expandable storage, 16 MB
          of RAM and a 1,150 mAh battery. The Unisoc 6531F-powered handset also
          has a 3.5 mm jack, a Micro USB port and an FM radio. Furthermore, HMD
          Global has included two SIM card slots and a 0.3 MP rear-facing camera
          complemented by a small torch. The Nokia 6310 runs the ageing Series
          30+ OS, which debuted in 2013, and comes with Snake pre-installed. HDM
          Global's marketing assets imply that the Nokia 6310 will be available
          in black, green and yellow. Currently, the device is only purchasable
          in black or yellow though, both retailing for £59.99.
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
    </ModalContainer>
  );
}

export default FinanceModal;
