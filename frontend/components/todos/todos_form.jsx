import React, { Component } from 'react';

class TodosForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.uniqueId = this.uniqueId.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    const { receiveTodo } = this.props;
    e.preventDefault();

    const todo = Object.assign( {}, this.state, {id: this.uniqueId() });
    receiveTodo(todo);
    //reset form
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className='title-input'
            ref='title'
            value={title}
            placeholder='New Todo'
            onChange={this.update('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            className='body-input'
            ref='body'
            cols='30'
            value={body}
            placeholder='Description'
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className='create-todo-button'>Create Todo!</button>
      </form>
    );
  }
}

export default TodosForm;
