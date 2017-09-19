import { connect } from 'react-redux';
import { receiveStep } from '../../actions/steps_actions';
import { stepsByTodoId } from '../../reducers/selectors';

//component
import StepsList from './steps_list';

const mapStateToProps = (state, {todo_id}) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id,
});

const mapDispatchToProps = dispatch => ({
  receiveStep: todo => dispatch(receiveStep(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsList);
