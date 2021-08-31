import React,{useState} from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top:0;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  position: fixed;
  z-index: 10;
  border-radius: 10px;
  background-color: transparent;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: transparent;
  display:flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #fff;
  background-color:#0C0349;

  p{
    text-align: center;
    margin: 0 1rem 1rem 1rem;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: #fff;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ModalTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
  padding: 15px 10px;
  background-color:#270593;
  color: #fff;
  border-radius: 15px 0 0 15px;
`;
const ModalSubTitle = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 80%;
  padding: 10px 10px;
  background-color:#200a72;
  color: #fff;
  border-radius: 0 0 0 15px;
`;

export const Modal = ({showModal, setShowModal, data}) => {
  return(
    <>
      {showModal? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalHeader>
              <ModalTitle>{data.company}</ModalTitle>
              <ModalSubTitle>{data.position}</ModalSubTitle>
            </ModalHeader> 
            <ModalContent>
              <p>{data.description}</p>
            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev=>!prev)}/>
          </ModalWrapper>
        </Background>
      ): null}
    </>
  );
};
