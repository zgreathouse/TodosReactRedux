import React from 'react';
import ReactDOM from 'react-dom';

//components
import Root from './components/root';

//for testing!
import configureStore from './store/store';
import {
  receiveTodo,
  receiveTodos,
  removeTodo, } from './actions/todos_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;

  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});


// const newTodos = [
//    {
//     id: 3,
//     title: 'Clean Room',
//     body: 'No',
//     done: false
//   },
//   {
//     id: 4,
//     title: 'Laundry',
//     body: 'Clean clothes are what dreams are made of',
//     done: true
//   },
// ]
