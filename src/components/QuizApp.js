import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Question from "./Question";
import FinalScore from "./FinalScore";
import { nextQuestion, resetQuiz } from "../actions";

const QuizApp = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, score } = useSelector(
    (state) => state.quiz
  );
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(nextQuestion());
    } else {
      setShowResults(true);
    }
  };

  const handlePlayAgain = () => {
    dispatch(resetQuiz());
    setShowResults(false);
  };

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      setShowResults(true);
    }
  }, [currentQuestionIndex, questions.length]);

  return (
    <div>
      {!showResults ? (
        <div className="quiz-app">
          <Question onNext={handleNext} />
        </div>
      ) : (
        <div>
          <FinalScore score={score} onPlayAgain={handlePlayAgain} />
        </div>
      )}
    </div>
  );
};

export default QuizApp;
