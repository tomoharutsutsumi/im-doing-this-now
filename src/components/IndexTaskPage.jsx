import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { finishTask } from '../actions/tasks';

const IndexTaskPage = ({ dispatch, tasks }) => (
  <div>
    {tasks.map((task) => {
      if (task.isFinished) return null;
      return (
        <TaskItem
          key={task.id}
          {...task}
          onClick={() => {
            dispatch(finishTask(task.id, { isFinished: true }));
          }}
        />
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  tasks: state,
});

export default connect(mapStateToProps)(IndexTaskPage);
