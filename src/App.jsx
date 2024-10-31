import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import QuestionPage from './pages/QuestionPage';
import QuizPage from './pages/QuizPage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/quizzes" element={<QuizPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;