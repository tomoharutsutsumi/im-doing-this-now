import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import AddTaskForm from './AddTaskForm';

const AddTaskPage = props => (
  <div>
    <p>Add Task</p>
    <AddTaskForm
      onSubmit={(task) => {
        props.dispatch(addTask(task));
      }}
    />
  </div>
);

export default connect()(AddTaskPage);
