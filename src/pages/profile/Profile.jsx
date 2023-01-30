import React from 'react';
import { useContext, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import { Context } from '../../context/Context';
import './profile.css';
import axios from 'axios';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:8000/images/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedAuthor = {
      authorId: user._id,
      username,
      email,
      password,
    };

    try {
      await axios.put('/authors/' + user._id, updatedAuthor);
      setSuccess(true);
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/authors/${user._id}`, {
        data: { authorId: user._id },
      });
      window.location.replace('/register');
    } catch (error) {}
  };

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileActions">
          <span className="profileUpdate">Update Your Account</span>
          <span className="profileDelete" onClick={handleDelete}>
            Delete Your Account
          </span>
        </div>
        <form className="profileSettings" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="updateSubmit" type="submit">
            Update
          </button>
          {success && (
            <span className="updateMsg">Profile has been updated!</span>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}
