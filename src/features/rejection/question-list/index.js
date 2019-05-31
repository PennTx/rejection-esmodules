import { connect } from '../../../../web_modules/react-redux.js';
    
import QuestionList from './question-list-component.js';
import { answerQuestion, deleteQuestion } from '../rejection-reducer.js';

const mapStateToProps = state => ({
  questions: state
});   
        
const mapDispatchToProps = {
  handleToggleQuestionStatusClick: (id, status, event) =>
    answerQuestion({
      id,
      status: (status === 'Accepted' ? 'Rejected' : status === 'Rejected' ? 'Unanswered' : 'Accepted' )
    }),
  handleDeleteQuestionClick: (id, event) =>
    deleteQuestion({
      id
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);

