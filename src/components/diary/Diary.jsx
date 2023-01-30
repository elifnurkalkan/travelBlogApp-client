import React from 'react';
import './diary.css';
import { Link } from 'react-router-dom';

export default function Diary({ diary }) {
  const PF = 'http://localhost:8000/images/';
  return (
    <>
      <div className="diary">
        {diary.photo && (
          <img src={PF + diary.photo} alt="" className="diaryImg" />
        )}

        <div className="diaryInfo">
          <div className="titleDate">
            <Link
              to={`/diary/${diary._id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="diaryTitle">{diary.title}</div>
            </Link>

            <div className="diaryDate">
              {new Date(diary.createdAt).toDateString()}
            </div>
          </div>
          <hr />
          <span className="diaryText">{diary.desc}</span>
          <hr />
          <span className="diaryAuthor">Author: {diary.author}</span>
        </div>
      </div>
    </>
  );
}
