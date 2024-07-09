// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import ErrorPage from './components/ErrorPage';
import { fetchPopularPosts } from './features/posts/postsSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <div className="main-layout">
        <LeftSidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/search" element={<PostList />} /> {/* Add search route */}
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
