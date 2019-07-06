import React from 'react';

export default class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requester: '',
      worker: '',
      startDate: 0,
      deadLineDate: 0,
      contents: '',
      error: '',
    };
  }

  onRequesterChange = (e) => {
    const requester = e.target.value;
    this.setState(() => ({ requester }));
  }

  onWorkerChange = (e) => {
    const worker = e.target.value;
    this.setState(() => ({ worker }));
  }

  onStartDateChange = (e) => {
    const startDate = e.target.value;
    this.setState(() => ({ startDate }));
  }

  onDeadlineDateChange = (e) => {
    const deadLineDate = e.target.value;
    this.setState(() => ({ deadLineDate }));
  }

  onContentsChange = (e) => {
    const contents = e.target.value;
    this.setState(() => ({ contents }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.requester || !this.state.worker || !this.state.start_date || !this.state.deadline_date || !this.state.contents) {
      this.setState(() => ({ error: 'There are vacant inputs' }));
    } else {
      this.props.onSubmit({
        requester: this.state.requester,
        worker: this.state.worker,
        start_date: this.state.startDate,
        deadline_date: this.state.deadLineDate,
        contents: this.state.contents,
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>{this.state.error}</p>
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
    );
  }
}
