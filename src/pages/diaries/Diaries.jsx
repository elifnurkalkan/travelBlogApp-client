import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import './diaries.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import AllDiaries from '../../components/allDiaries/AllDiaries';
import { useLocation } from 'react-router-dom';

export default function Diaries() {
  const [diaries, setDiaries] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchDiaries = async () => {
      const res = await axios.get('/diaries' + search);
      setDiaries(res.data);
    };
    fetchDiaries();
  }, [search]);

  return (
    <>
      <div>
        <Topbar />
        <div className="diaries">
          <AllDiaries diaries={diaries} />
        </div>
        <Footer />
      </div>
    </>
  );
}
