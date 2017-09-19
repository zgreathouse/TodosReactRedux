import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todos_actions';

//component
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = dispatch => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
