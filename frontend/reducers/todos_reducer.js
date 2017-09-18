import merge from 'lodash/merge';
import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO, } from '../actions/todos_actions';

const initialState = {
  1: {
    id: 1,
    title: 'Save the world before bedtime',
    body: 'Sugar, Spice, and Everything Nice',
    done: false
  },
  2: {
    id: 2,
    title: 'Get it memorized',
    body: 'Listen to Axel',
    done: true
  },
}

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
}

export default todosReducer;
