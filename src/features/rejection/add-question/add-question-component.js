import React, { useRef } from '../../../../web_modules/react.js';

const AddQuestion = ({ handleAcceptedClick, handleRejectedClick, handleUnansweredClick }) => {
  const questionRef = useRef();
  const askeeRef = useRef();

  return React.createElement(
    'div',
    { className: 'add-question' },
    React.createElement('label', { htmlFor: 'question-input' }, 'Question:'),
    React.createElement('input', { className: 'question', id: 'question-input', ref: questionRef }, null),
    React.createElement('label', { htmlFor: 'askee-input' }, 'Askee:'),
    React.createElement('input', { className: 'askee', id: 'askee-input', ref: askeeRef }, null),
    React.createElement('button', { className: 'accepted', onClick: () => handleAcceptedClick(questionRef, askeeRef) }, 'Accepted'),
    React.createElement('button', { className: 'rejected', onClick: () => handleRejectedClick(questionRef, askeeRef) }, 'Rejected'),
    React.createElement('button', { className: 'unanswered', onClick: () => handleUnansweredClick(questionRef, askeeRef) }, 'Unanswered')
  )
};

export default AddQuestion;

