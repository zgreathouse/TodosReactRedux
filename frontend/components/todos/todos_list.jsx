import React, { Component } from 'react';

//components
import TodosListItem from './todos_list_item';
import TodosForm from './todos_form';

class TodosList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;

    const allTodos = todos.map( todo => {
      return (
        <TodosListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={receiveTodo}
          removeTodo={removeTodo}/>
      )
    });

    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {allTodos}
        </ul>
        <TodosForm receiveTodo={receiveTodo}/>
      </div>
    );
  }
}

export default TodosList;

/* <li key={todo.id}>{todo.title}</li> */
