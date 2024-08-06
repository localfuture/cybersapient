const initialState = {
  questions: [
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correct: 'Paris' },
    { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correct: 'Mars' },
    { question: 'Who wrote "Romeo and Juliet"?', options: ['Mark Twain', 'Charles Dickens', 'William Shakespeare', 'Jane Austen'], correct: 'William Shakespeare' },
    { question: 'What is the smallest prime number?', options: ['0', '1', '2', '3'], correct: '2' },
  ],
  currentQuestionIndex: 0,
  score: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      const isCorrect = action.payload === state.questions[state.currentQuestionIndex].correct;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
};

export default quizReducer;
