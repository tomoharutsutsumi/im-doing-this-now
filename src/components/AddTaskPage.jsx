import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import AddTaskForm from './AddTaskForm';

const AddTaskPage = ({ dispatch, task }) => (
  <div>
    <p>Add Task</p>
    <AddTaskForm
      task={task}
      onSubmit={(task) => {
        dispatch(addTask(task));
      }}
    />
  </div>
);

export default connect()(AddTaskPage);
