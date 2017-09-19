import React, { Component } from 'react';

//components
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { steps, todo_id, receiveStep } = this.props;
    const allSteps = steps.map(step => (
      <StepListItemContainer
        key={`step-list-item${step.id}`}
        step={step} />
    ));

    return (
      <div className='steps-list-container'>
        <div className="steps-list">
          { allSteps }
        </div>
        <StepForm todo_id={ todo_id } receiveStep={ receiveStep } />
      </div>
    );
  }
}

export default StepList;
