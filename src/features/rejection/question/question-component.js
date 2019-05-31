import React from '../../../../web_modules/react.js';
    
const Question = ({ id, question, askee, status, timestamp, handleToggleQuestionStatusClick, handleDeleteQuestionClick } = {}) =>
  React.createElement('li', { className: 'question' },
    React.createElement('dl', null,
      React.createElement('dt', null, 'Question: '),
      React.createElement('dd', { className: 'question' }, question),
      React.createElement('dt', null, 'Askee: '),
      React.createElement('dd', { className: 'askee' }, askee),
      React.createElement('dt', null, 'Status: '),
      React.createElement('dd', { className: 'status', onClick: event => handleToggleQuestionStatusClick(id, status, event) }, status),
      React.createElement('dt', null, 'Answered: '),
      React.createElement('dd', { className: 'timestamp' }, timestamp ? (new Date(timestamp)).toLocaleString() : '')
    ),
    React.createElement('button', { type: 'button', onClick: event => handleDeleteQuestionClick(id, event) }, 'Delete')
  );
      
export default Question;

