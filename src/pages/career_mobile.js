import React from 'react';
import { Navbar } from '../components/Navbar';
import FinanceMobileMain from '../components/Finance_mobile_main';
import FinanceMobileSector from '../components/Finance_mobile_Sector';
import { Footer } from '../components/Footer';

const CareerMobile = () => {
  return (
    <div style={{ background: 'rgba(0, 0, 33, 1)' }}>
      <Navbar />
      <FinanceMobileMain />
      <FinanceMobileSector />
      <Footer />
    </div>
  );
};

export default CareerMobile;
