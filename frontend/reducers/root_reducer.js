import { combineReducers } from 'redux';

//reducers
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
