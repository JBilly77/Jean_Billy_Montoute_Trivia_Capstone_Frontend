import React from 'react';
import PropTypes from 'prop-types';

const QuestionCard = ({ question }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <p>Category: {question.category}</p>
      <p>Difficulty: {question.difficulty}</p>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionCard;