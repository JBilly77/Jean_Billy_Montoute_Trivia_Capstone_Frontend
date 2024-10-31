import React from 'react';
import PropTypes from 'prop-types';

const QuizCard = ({ quiz }) => {
  return (
    <div>
      <h2>{quiz.title}</h2>
      <ul>
        {quiz.questions.map((questionId) => (
          <li key={questionId}>{questionId}</li>
        ))}
      </ul>
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.object.isRequired,
};

export default QuizCard;