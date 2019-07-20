// @flow
import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';

type Props = {
  tasks: Array<any>,
  location: Object
}

const FinishedTaskPage = ({ tasks, location }: Props) => (
  <div>
    <p>FinishedTask</p>
    <p>{location.state && location.state.message}</p>
    {tasks.map((task) => {
      if (task.isFinished) return <TaskItem key={task.id} {...task} />;
      return null;
    })}
  </div>
);

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(FinishedTaskPage);
