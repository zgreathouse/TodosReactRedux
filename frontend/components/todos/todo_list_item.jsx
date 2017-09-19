import React, { Component } from 'react';
import merge from 'lodash/merge'

//components
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false,
    }

    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const { todo } = this.props;
    const toggledTodo = merge({}, todo, { done: !todo.done });
    this.props.receiveTodo(toggledTodo);
  }

  toggleDetail(e) {
    e.preventDefault();
    const { detail } = this.state;
    this.setState({ detail: !detail});
  }

  render() {
    const { todo } = this.props;
    const { title, done } = todo;

    let detail;

    if(this.state.detail) {
      detail = <TodoDetailViewContainer todo={todo}/>
    }

    return (
      <div>
        <div className="todo-item-container">
          <h3 className='todo-title'
            onClick={this.toggleDetail}>{title}</h3>
          <button onClick={this.toggleTodo}
            className="toggle-todo-button">
            {done ? 'Undo' : 'Done'}</button>
        </div>
        {detail}
      </div>
    );
  }
}

export default TodoListItem;
