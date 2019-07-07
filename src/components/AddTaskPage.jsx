// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import AddTaskForm from './AddTaskForm';

type Props = {
  dispatch: (e: Event) => void,
}

const AddTaskPage = ({ dispatch }: Props) => (
  <div>
    <p>Add Task</p>
    <AddTaskForm
      onSubmit={(task) => {
        dispatch(addTask(task));
      }}
    />
  </div>
);

export default connect()(AddTaskPage);
