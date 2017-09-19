import { combineReducers } from 'redux';

//reducers
import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
});

export default rootReducer;
