import { connect } from '../../../../web_modules/react-redux.js';

import AddQuestion from './add-question-component.js';
import { createQuestion } from '../rejection-reducer.js';
  
const mapDispatchToProps = {
  handleAcceptedClick: (questionRef, askeeRef) =>
    createQuestion({
      question: questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Accepted'
    }),
  handleRejectedClick: (questionRef, askeeRef) =>
    createQuestion({
      question: questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Rejected'
    }),
  handleUnansweredClick: (questionRef, askeeRef) =>
    createQuestion({
      question: questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Unanswered'
    })
};

export default connect(null, mapDispatchToProps)(AddQuestion);

