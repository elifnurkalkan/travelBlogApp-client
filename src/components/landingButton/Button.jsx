import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Button() {
  const { user } = useContext(Context);
  return (
    <>
      <button type="button" className="button">
        {user ? (
          <Link
            to="/write"
            style={{ textDecoration: 'none', color: '#bc5a45' }}
          >
            Share Your Story
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ textDecoration: 'none', color: '#bc5a45' }}
          >
            Share Your Story
          </Link>
        )}
      </button>
    </>
  );
}
