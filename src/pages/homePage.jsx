import React from 'react';
import questionContainer from '../containers/questionContainer';
import quizContainer from '../containers/quizContainer';
import userContainer from '../containers/userContainer';

const homePage = () => {
  return (
    <div>
      <h1>NZ FUN TRIVIA APP</h1>
      <questionContainer />
      <quizContainer />
      <userContainer />
    </div>
  );
};

export default homePage;