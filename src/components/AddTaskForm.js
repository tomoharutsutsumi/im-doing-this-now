import React from 'react';
import { NavLink } from 'react-router-dom'

export default class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requester: '',
      worker: '',
      start_date: 0,
      deadline_date: 0,
      contents: ''
    }
  }
  onRequesterChange = (e) => {
    const requester = e.target.value
    this.setState(() => ({ requester }))
  }
  onWorkerChange = (e) => {
    const worker = e.target.value
    this.setState(() => ({ worker }))
  }
  onStartDateChange = (e) => {
    const start_date = e.target.value 
    this.setState(() => ({ start_date }))
  }
  onDeadlineDateChange　= (e) => {
    const deadline = e.target.value
    this.setState(() => ({ deadline: deadline }))
  }
  onContentsChange = (e) => {
    const contents = e.target.value
    this.setState(() => ({ contents }))
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      requester: this.state.requester,
      worker: this.state.worker,
      start_date: this.state.start_date,
      deadline_date: this.state.deadline_date,
      contents: this.state.contents
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Who is a requester?"
            autoFocus
            onChange={this.onRequesterChange}
          />
          <input
            type="text"
            placeholder="Who takes charge of this task?"
            onChange={this.onWorkerChange}
          />
          <input
            type="number"
            placeholder="When does this task begin?"
            onChange={this.onStartDateChange}
          />
          <input
            type="number"
            placeholder="When is this task going to be done?"
            onChange={this.onDeadlineDateChange}
          />
          <textarea
            placeholder="What is this task?"
            onChange={this.onContentsChange}
          />
          <button>Add Task</button>
        </form>
      </div>
    )
  }
}