import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <Link className="link" to="/" style={{ textDecoration: 'none' }}>
            <span className="topLogo">Travel With Me</span>
          </Link>
        </div>
        <div className="topRight">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/" style={{ textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li className="topListItem">
              <Link
                className="link"
                to="/diaries"
                style={{ textDecoration: 'none' }}
              >
                Diaries
              </Link>
            </li>
            <li className="topListItem">
              <Link
                className="link"
                to="/write"
                style={{ textDecoration: 'none' }}
              >
                Write
              </Link>
            </li>
            <li className="topListItem">
              <Link
                className="link"
                to="/profile"
                style={{ textDecoration: 'none' }}
              >
                Profile
              </Link>
            </li>
            {user ? (
              <li className="topListItem" onClick={handleLogout}>
                <Link
                  className="link"
                  to="/"
                  style={{ textDecoration: 'none' }}
                >
                  {user && 'LOGOUT'}
                </Link>
              </li>
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link
                    className="link"
                    to="/login"
                    style={{ textDecoration: 'none' }}
                  >
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link
                    className="link"
                    to="/register"
                    style={{ textDecoration: 'none' }}
                  >
                    REGISTER
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
