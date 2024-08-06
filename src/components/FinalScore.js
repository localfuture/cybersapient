import React from 'react';
import { useSelector } from 'react-redux';

const FinalScore = ({ score, onPlayAgain }) => {
  const { questions } = useSelector(state => state.quiz);

  return (
    <div className='final-score'>
      <h2>Your Score: {score}/{questions.length}</h2>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default FinalScore;
