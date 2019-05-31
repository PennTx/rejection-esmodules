import Score from './score-component.js';
import { connect } from '../../../../web_modules/react-redux.js';
import { getScore } from '../rejection-reducer.js';

const mapStateToProps = state => ({
  score: getScore(state)
});

export default connect(mapStateToProps)(Score);

