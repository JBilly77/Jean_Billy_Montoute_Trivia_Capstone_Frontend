import React, { useState, useEffect } from 'react';
import QuizCard from '../components/QuizCard';
import axios from 'axios';

const quizContainer = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3007/api/quizzes')
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz._id} quiz={quiz} />
      ))}
    </div>
  );
};

export default quizContainer;