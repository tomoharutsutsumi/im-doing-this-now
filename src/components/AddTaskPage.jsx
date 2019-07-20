// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import AddTaskForm from './AddTaskForm';
import { displayFlash, deleteFlash } from '../actions/flash';

type Props = {
  dispatch: (e: Event) => void,
  flash: Object
}

const AddTaskPage = ({ dispatch, flash }: Props) => (
  <div>
    <p>Add Task</p>
    <p>{flash.display && flash.text}</p>
    <AddTaskForm
      onSubmit={(task) => {
        dispatch(addTask(task));
        dispatch(displayFlash(true, 'you added task successfully!'));
        setTimeout(() => dispatch(deleteFlash(false, '')), 3000);
      }}
    />
  </div>
);
const mapStateToProps = state => ({
  flash: state.flash,
});

export default connect(mapStateToProps)(AddTaskPage);
