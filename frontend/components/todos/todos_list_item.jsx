import React, { Component } from 'react';
import merge from 'lodash/merge'

class TodosListItem extends Component {
  constructor(props) {
    super(props);

    this.toggleTodo = this.toggleTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const { todo } = this.props;
    const toggledTodo = merge({}, todo, { done: !todo.done });
    this.props.receiveTodo(toggledTodo);
  }

  handleDelete(e) {
    e.preventDefault();
    const { todo, removeTodo } = this.props;
    let result = confirm("Are you sure you want to delete this item?");
    result ? removeTodo(todo) : null;
  }

  render() {

    const { todo } = this.props;
    const { title, body, done } = todo;

    const status = todo.done ? 'Finshed' :'Unfinshed';

    return (
      <div>
        <h3>Title: {title}</h3>
        <p>Body: {body}</p>
        <p>Status: {status}</p>
        <button onClick={this.toggleTodo}>{done ? 'Undo' : 'Done'}</button>
        <button onClick={this.handleDelete}>delete</button>
      </div>
    );
  }
}

export default TodosListItem;
