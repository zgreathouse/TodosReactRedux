import React, { Component } from 'react';

//components
import TodoListItem from './todo_list_item';
import TodosForm from './todos_form';

class TodosList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;

    const allTodos = todos.map( todo => {
      return (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={receiveTodo}
          removeTodo={removeTodo}/>
      )
    });

    return (
      <div className="outer-container">
        <div className="container">
          <h1 className="todos-title">Todos</h1>

          <div className="todo-list-container">
            <div className="todos-list">
              {allTodos}
            </div>

            <div className="todos-form">
              <TodosForm receiveTodo={receiveTodo}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default TodosList;
