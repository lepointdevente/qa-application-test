import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeReviewPage from './components/ResumeReviewPage';
import ResumeListPage from './components/ResumeListPage';
import HomePage from './components/HomePage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resumes" element={<ResumeListPage />} />
          <Route path="/resumes/:id" element={<ResumeReviewPage />} />
        </Routes>
      </Router>
  );
}

export default App;