import React, { Component } from 'react';
import merge from 'lodash/merge';

class StepListItem extends Component {
  constructor(props) {
    super(props);

    this.toggleStepStatus = this.toggleStepStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleStepStatus(e) {
    e.preventDefault();
    const { step } = this.props;
    const toggledStep = merge({}, step, { done: !step.done });
    this.props.receiveStep(toggledStep);
  }

  handleDelete(e) {
    e.preventDefault();
    const { step, removeStep } = this.props;
    let result = confirm("Are you sure you want to delete this item?");
    result ? removeStep(step) : null;
  }

  render() {
    const { step, removeStep } = this.props;
    const { title, body, id, done } = step;

    const status = step.done ? 'Finshed' :'Unfinshed';

    return (
      <div className='step-item-container'>
        <div className='step-title-and-button'>
          <h3 className='step-title'>{ title }</h3>
          <button className="toggle-step-button"
            onClick={ this.toggleStepStatus }>
            { done ? "Undo" : "Done" }
          </button>
        </div>
        <div className='details'>
          <div className="detail-description">Description:
            <p className="description">{body}</p>
          </div>

          <div className="detail-status">
            <div className="detail-status-title">Status:</div>
            <div className='status'>{status}</div>
          </div>
        </div>
        <button onClick={ this.handleDelete }>Delete</button>
      </div>
    );
  }
}

export default StepListItem;
