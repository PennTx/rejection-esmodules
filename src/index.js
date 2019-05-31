import React from '../web_modules/react.js';
import { render } from '../web_modules/react-dom.js';

import { createStore, applyMiddleware } from '../web_modules/redux.js';
import { Provider } from '../web_modules/react-redux.js';

import App from './app.js';
import rejection from './features/rejection/rejection-reducer.js';


const store = createStore(rejection, rejection());
  
render(
  React.createElement(Provider, { store },
    React.createElement(App, null, null)
  ),
  document.getElementById('root')
);

