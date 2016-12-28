import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import StreamReducer from './actions/messageReducer';
import Stream from './components/Stream';

import './styles/app.css';

const store = createStore(
	StreamReducer,
	window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
  	<Stream />
  </Provider>,
  document.getElementById('root')
);
