import React, { Component } from 'react';

class StepForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false,
      todo_id: this.props.todo_id,
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
    const { receiveStep } = this.props;
    e.preventDefault();

    const step = Object.assign( {}, this.state, {id: this.uniqueId() });
    receiveStep(step);
    //reset form
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <form className='step-form' onSubmit={this.handleSubmit}>
        <label className='title-label'>Title:
          <input
            className='title-input'
            ref='title'
            value={title}
            placeholder='New Step'
            onChange={this.update('title')}
            required/>
        </label>
        <label className='body-label'>Body:
          <input
            className='body-input'
            ref='body'
            cols='30'
            value={body}
            placeholder='Description'
            onChange={this.update('body')}
            required/>
        </label>
        <button className="create-button">Add Step</button>
      </form>
    );
  }
}

export default StepForm;
