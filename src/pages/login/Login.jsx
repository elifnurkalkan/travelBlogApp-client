import React, { useContext } from 'react';
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import './login.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  return (
    <>
      <Topbar />
      <div className="login">
        <img
          src="https://cdn.pixabay.com/photo/2022/12/10/13/46/attack-7647136__480.png"
          className="logo"
          alt=""
        />
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="Username"
              placeholder="Your email.."
              ref={emailRef}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password.."
              ref={passwordRef}
            />
          </div>
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
        <button className="loginRegisterButton">
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Register
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
}
