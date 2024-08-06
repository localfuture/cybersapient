export const answerQuestion = (option) => ({
    type: 'ANSWER_QUESTION',
    payload: option,
  });
  
  export const nextQuestion = () => ({
    type: 'NEXT_QUESTION',
  });
  
  export const resetQuiz = () => ({
    type: 'RESET_QUIZ',
  });
  