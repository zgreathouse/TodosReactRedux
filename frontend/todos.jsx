import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//root component
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});
