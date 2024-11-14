import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Home from './pages/Home/Home';
import MyPage from './pages/MyPage/MyPage';
import Profile from './pages/MyPage/Profile';
import Posts from './pages/MyPage/Posts';
import Likes from './pages/MyPage/Likes';
import Scrap from './pages/MyPage/Scraps';
import EditProfile from './pages/MyPage/EditProfile';
// import Auth from "./pages/Auth";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import FindPassword from './pages/Auth/FindPassword';
import './App.css';
import './styles/fonts.css';
import Header from './components/Header';
import QuestionDetail from './pages/QnA/QuestionDetail';
import QuestionRegister from './pages/QnA/QuestionRegister';
import Board from './pages/QnA/Board';
import FindBank from './pages/Location/FindBank';
import NotFound from './pages/Error/404';
import Community from './pages/Community/Community';

import Gwangjin from './pages/LandingPage/Gwangjin';
import Seocho from './pages/LandingPage/Seocho';

import BankerProfile from './pages/BankerProfile/Profile';
import CommunityRegister from './pages/Community/CommunityRegister';

import BankerMyPage from './pages/BankerMyPage/MyPage'; // 기본 행원 마이페이지
import BankerMyProfile from './pages/BankerMyPage/Profile'; // 행원 프로필 페이지
//import BankerProfileRegister from './pages/BankerMyPage/ProfileRegister'; // 행원 프로필 등록 페이지
//import BankerProfileEdit from './pages/BankerMyPage/ProfileEdit'; // 해원 프로필 수정 페이지
import BankerEditProfile from './pages/BankerMyPage/EditProfile'; // 행원 개인정보 수정 페이지

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#008485',
        },
      }}
    >
      <Router>
        <div className="h-dvh flex flex-col">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my" element={<MyPage />}>
              <Route path="profile" element={<Profile />} />
              <Route path="posts" element={<Posts />} />
              <Route path="likes" element={<Likes />} />
              <Route path="scrap" element={<Scrap />} />
              <Route path="edit" element={<EditProfile />} />
    
              {/*<Route path="auth" element={<Auth />} /> */}
            </Route>

            <Route path="/banker" element={<BankerMyPage />}> {/*행원 마이페이지*/}
              <Route path="profile" element = {<BankerMyProfile/>}/> {/*행원 프로필 조회*/}
              {/*<Route path="profile/register" element={<BankerProfileRegister />} /> {/*행원 프로필 등록*/}
              {/*<Route path="profile/edit" element={<BankerProfileEdit />} /> {/*행원 프로필 수정*/}
              <Route path="edit" element={<BankerEditProfile />} /> {/*행원 개인정보 수정*/}
            </Route>
            {/* You can add other routes here as needed */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findPassword" element={<FindPassword />} />
            <Route path="/qna" element={<Board />} />
            <Route path="/qna/regist" element={<QuestionRegister />} />
            <Route path="/qna/detail/:postId" element={<QuestionDetail />} />
            <Route path="/findbank" element={<FindBank />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/regist" element={<CommunityRegister />} />
            <Route path="/gwangjin" element={<Gwangjin />}></Route>
            <Route path="/seocho" element={<Seocho />}></Route>
            <Route path="/bankerProfile" element={<BankerProfile />}></Route>
            {/* Error */}
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
