import React from 'react';
import { connect } from 'react-redux';
import { TaskItem } from './TaskItem';

const FinishedTaskPage = (props) => (
  <div>
    <p>FinishedTask</p>
    {props.tasks.map((task) => {
      if (task.is_finished) return <TaskItem  key={task.id}{...task}/>
      return null
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    tasks: state
  }
}

export default connect(mapStateToProps)(FinishedTaskPage)