import React from 'react';
import Diary from '../diary/Diary';
import './allDiaries.css';

export default function AllDiaries({ diaries }) {
  return (
    <div className="diaries">
      {diaries.map((d) => (
        <Diary key={d._id} diary={d} />
      ))}
    </div>
  );
}
