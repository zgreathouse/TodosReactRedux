import merge from 'lodash/merge';
import {
  RECEIVE_STEP,
  RECEIVE_STEPS,
  REMOVE_STEP, } from '../actions/steps_actions';

const initialState = {
  1: { // this is the step with id = 1
    id: 1,
    title: 'Step 1',
    body: 'Description',
    done: false,
    todo_id: 1
  },
  2: { // this is the step with id = 1
    id: 2,
    title: 'Step 2',
    body: 'Description',
    done: false,
    todo_id: 1
  },
  3: { // this is the step with id = 2
    id: 3,
    title: 'Step 1',
    body: 'Description',
    done: false,
    todo_id: 2
  },
  4: { // this is the step with id = 2
    id: 4,
    title: 'Step 2',
    body: 'Description',
    done: false,
    todo_id: 2
  }
};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_STEP:
      const newStep = {[action.step.id]: action.step}
      return merge({}, state, newStep);
    case RECEIVE_STEPS:
      nextState = {};
      action.steps.forEach(step => nextState[step.id] = step)
      return nextState;
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
}

export default stepsReducer;
