import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export default class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requester: '',
      worker: '',
      startDate: moment(),
      deadlineDate: moment(),
      contents: '',
      error: '',
      focused: false,
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

  onContentsChange = (e) => {
    const contents = e.target.value;
    this.setState(() => ({ contents }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.requester || !this.state.worker || !this.state.startDate || !this.state.deadlineDate || !this.state.contents) {
      this.setState(() => ({ error: 'There are vacant inputs' }));
    } else {
      this.props.onSubmit({
        requester: this.state.requester,
        worker: this.state.worker,
        startDate: this.state.startDate.format('MM-DD-YYYY'),
        deadlineDate: this.state.deadlineDate.format('MM-DD-YYYY'),
        contents: this.state.contents,
      });
      this.setState(() => ({ requester: '', worker: '', contents: '' }));
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
            value={this.state.requester}
            autoFocus
            onChange={this.onRequesterChange}
          />
          <input
            type="text"
            placeholder="Who takes charge of this task?"
            value={this.state.worker}
            onChange={this.onWorkerChange}
          />
          <SingleDatePicker
            numberOfMonths={1}
            onDateChange={deadlineDate => this.setState({ deadlineDate })}
            onFocusChange={({ focused }) => this.setState({ focused })}
            focused={this.state.focused}
            date={this.state.deadlineDate}
          />
          <textarea
            placeholder="What is this task?"
            value={this.state.contents}
            onChange={this.onContentsChange}
          />
          <button>Begin Task</button>
        </form>
      </div>
    );
  }
}
