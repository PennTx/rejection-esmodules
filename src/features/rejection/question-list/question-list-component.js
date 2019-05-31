import React from '../../../../web_modules/react.js';
    
import Question from '../question/question-component.js';
  
const QuestionList = ({ questions = [], handleToggleQuestionStatusClick, handleDeleteQuestionClick } = []) =>
  React.createElement('ul', { className: 'question-list' },
    questions.map(question => 
      React.createElement(Question,
        {
          ...question,
          key: question.id,
          handleToggleQuestionStatusClick: handleToggleQuestionStatusClick,
          handleDeleteQuestionClick: handleDeleteQuestionClick
        },
        null
      )
    )
  )

export default QuestionList;

