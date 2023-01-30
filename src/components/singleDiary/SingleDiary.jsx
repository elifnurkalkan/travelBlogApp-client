import React from 'react';
import './singleDiary.css';
import { Link, useLocation } from 'react-router-dom';
import Topbar from '../topbar/Topbar';
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function SingleDiary() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [diary, setDiary] = useState({});
  const PF = 'http://localhost:8000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchDiary = async () => {
      const res = await axios.get('/diaries/' + path, {
        author: user.username,
      });
      setDiary(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchDiary();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/diaries/${diary._id}`, {
        data: { author: user.username },
      });
      window.location.replace('/');
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/diaries/${diary._id}`, {
        author: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (error) {}
  };
  return (
    <>
      <div className="singleDiary">
        <div className="singleDiaryWrapper">
          {diary.photo && (
            <img src={PF + diary.photo} alt="" className="singleDiaryImg" />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singleDiaryTitleInput"
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singleDiaryTitle">
              {diary.title}
              {diary.author === user?.username && (
                <div className="singleDiaryEdit">
                  <span className="edit" onClick={() => setUpdateMode(true)}>
                    Edit
                  </span>
                  <span className="delete" onClick={handleDelete}>
                    Delete
                  </span>
                </div>
              )}
            </h1>
          )}

          <div className="singleDiaryInfo">
            <span className="singleDiaryAuthor">
              Author:
              <Link
                style={{ textDecoration: 'none', color: 'brown' }}
                to={`/?author=${diary.author}`}
              >
                <b>{diary.author}</b>
              </Link>
            </span>
            <span className="singleDiaryDate">
              {new Date(diary.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea
              className="singleDiaryDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singleDiaryDesc">{diary.desc}</p>
          )}
          {updateMode && (
            <button className="singleDiaryButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
}
