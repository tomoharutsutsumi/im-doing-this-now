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
      deadLineDate: moment(),
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
    if (!this.state.requester || !this.state.worker || !this.state.startDate || !this.state.deadLineDate || !this.state.contents) {
      this.setState(() => ({ error: 'There are vacant inputs' }));
    } else {
      this.props.onSubmit({
        requester: this.state.requester,
        worker: this.state.worker,
        startDate: this.state.startDate.format('MM-DD-YYYY'),
        deadLineDate: this.state.deadLineDate.format('MM-DD-YYYY'),
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
          <SingleDatePicker
            numberOfMonths={1}
            onDateChange={deadLineDate => this.setState({ deadLineDate })}
            onFocusChange={({ focused }) => this.setState({ focused })}
            focused={this.state.focused}
            date={this.state.deadLineDate}
          />
          <textarea
            placeholder="What is this task?"
            onChange={this.onContentsChange}
          />
          <button>Begin Task</button>
        </form>
      </div>
    );
  }
}
