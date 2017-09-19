import React, { Component } from 'react';

//components
import StepsListContainer from '../steps/steps_list_container';

class TodoDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: false,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleSteps = this.toggleSteps.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { todo, removeTodo } = this.props;
    let result = confirm("Are you sure you want to delete this item?");
    result ? removeTodo(todo) : null;
  }

  toggleSteps(e) {
    e.preventDefault();
    const { steps } = this.state;
    this.setState({ steps: !steps});
  }

  render() {
    const { todo, removeTodo } = this.props;
    const { body, id, done } = todo;
    const { steps } = this.state;

    const status = todo.done ? 'Finshed' :'Unfinshed';

    let todoSteps;

    if(this.state.steps) {
      todoSteps = <StepsListContainer todo_id={ id }/>
    }

    return (
      <div className="todo-detail-container">

        <div className="detail-description">Description:
          <p className="description">{body}</p>
        </div>

        <div className="detail-status">
          <div className="detail-status-title">Status:</div>
          <div className='status'>{status}</div>
        </div>

        <div className='detail-buttons'>
          <button onClick={this.toggleSteps}>
            {steps ? 'Hide Steps' : 'Steps'}
          </button>

          <button onClick={this.handleDelete}>Delete</button>
        </div>

        {todoSteps}

      </div>
    );
  }
}

export default TodoDetailView;
