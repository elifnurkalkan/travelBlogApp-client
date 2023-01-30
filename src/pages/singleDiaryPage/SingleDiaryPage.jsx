import React from 'react';
import Footer from '../../components/footer/Footer.jsx';
import SingleDiary from '../../components/singleDiary/SingleDiary.jsx';
import Topbar from '../../components/topbar/Topbar.jsx';
import './singleDiaryPage.css';

export default function singleDiaryPage() {
  return (
    <div className="singleDiaryPage">
      <Topbar />
      <SingleDiary />;
      <Footer />
    </div>
  );
}
