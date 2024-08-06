import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerQuestion, nextQuestion } from "../actions";
import Timer from "./Timer";

const Question = ({ onNext }) => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex } = useSelector(
    (state) => state.quiz
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeUp, setTimeUp] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (timeUp) {
      handleAnswer(null);
    }
  }, [timeUp]);

  const handleAnswer = (option) => {
    dispatch(answerQuestion(option));
    setSelectedOption(option);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      onNext();
      setTimeUp(false);
      setSelectedOption(null);
    }, 5000);
  };

  const question = questions[currentQuestionIndex];

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {showFeedback ? (
        <div className="feedback">
          {selectedOption == null ? (
            <h2>Time's up!</h2>
          ) : (
            <h2>
              {selectedOption === question.correct ? "Correct!" : "Incorrect!"}
            </h2>
          )}
        </div>
      ) : (
        <>
          <Timer onTimeUp={() => setTimeUp(true)} />
          <div className="question">
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={selectedOption === option ? "selected" : ""}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
