// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import SearchBar from './components/SearchBar';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <SearchBar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
