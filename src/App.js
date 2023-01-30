import Landing from './components/landingPart/Landing';
import Topbar from './components/topbar/Topbar';
import Diaries from './pages/diaries/Diaries';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Write from './pages/write/Write';
import SingleDiaryPage from './pages/singleDiaryPage/SingleDiaryPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/diaries" element={<Diaries />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/diary/:diaryId" element={<SingleDiaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
