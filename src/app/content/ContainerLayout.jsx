import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const ContainerLayout = ({ content }) => {
  return (
    <main className="">
      <Navbar />
      {content}
      <Footer />
    </main>
  );
};

export default ContainerLayout;
