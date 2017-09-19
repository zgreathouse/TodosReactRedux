import { connect } from 'react-redux';
import { receiveStep, removeStep } from '../../actions/steps_actions';

//component
import StepListItem from './step_list_item';

const mapDispatchToProps = dispatch => ({
  receiveStep: todo => dispatch(receiveStep(todo)),
  removeStep: todo => dispatch(removeStep(todo)),
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
