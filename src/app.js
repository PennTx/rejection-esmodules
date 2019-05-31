import React from '../web_modules/react.js';
import { connect } from '../web_modules/react-redux.js';

import Score from './features/rejection/score/index.js';
import AddQuestion from './features/rejection/add-question/index.js';
import Question from './features/rejection/question/question-component.js';
import QuestionList from './features/rejection/question-list/index.js';

const App = () =>
  React.createElement('div', null,
    React.createElement(Score, null, null),
    React.createElement(AddQuestion, null, null),
    React.createElement(QuestionList, null, null)
  );

export default connect(null, null)(App);

