import { connect } from 'react-redux';
import {
  receiveTodo,
  receiveTodos,
  removeTodo, } from '../../actions/todos_actions';
import { allTodos } from '../../reducers/selectors';

//component
import TodosList from './todos_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  receiveTodos: () => dispatch(receiveTodos()),
  removeTodo: todo => dispatch(removeTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
