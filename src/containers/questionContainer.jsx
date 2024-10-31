import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/questionsCard';
import axios from 'axios';

const questionContainer = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3007/api/questions')
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question._id} question={question} />
      ))}
    </div>
  );
};

export default questionContainer;