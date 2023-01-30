import React from 'react';
import './register.css';
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <Topbar />
      <div className="register">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/29/09/22/register-1627729__480.png"
          className="logo"
          alt=""
        />
        <form className="registerForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              className="registerInput"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              className="registerInput"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="registerInput"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="registerButton" type="submit">
            Register
          </button>
          <br />
          {error && <span>Something went wrong!</span>}
        </form>
        <Link to="/login">
          <button className="registerLoginButton">Login</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
