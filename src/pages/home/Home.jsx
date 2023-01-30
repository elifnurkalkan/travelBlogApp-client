import React from 'react';
import Footer from '../../components/footer/Footer';
import Landing from '../../components/landingPart/Landing';
import Topbar from '../../components/topbar/Topbar';

export default function Home() {
  return (
    <div>
      <Topbar />
      <Landing />
      <Footer />
    </div>
  );
}
