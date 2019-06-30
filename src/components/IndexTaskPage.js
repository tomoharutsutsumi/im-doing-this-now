import React from 'react';
import { connect } from 'react-redux';
import { TaskItem } from './TaskItem';

const IndexTaskPage = (props) => (
  <div>
    {props.tasks.map((task) => {
      return <TaskItem key={task.id}{...task}/>
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    tasks: state
  }
}

export default connect(mapStateToProps)(IndexTaskPage)