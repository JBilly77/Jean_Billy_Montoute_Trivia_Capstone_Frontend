import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';
import QuizContainer from '../containers/QuizContainer';
import UserContainer from '../containers/UserContainer';

const HomePage = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <QuestionContainer />
      <QuizContainer />
      <UserContainer />
    </div>
  );
};

export default HomePage;