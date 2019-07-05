import React from 'react';
import { connect } from 'react-redux';
import { TaskItem } from './TaskItem';
import { finishTask } from '../actions/tasks'

const IndexTaskPage = (props) => (
  <div>
    {props.tasks.map((task) => {
      console.log(task)
      if (task.is_finished) return null
      return <TaskItem 
        key={task.id}{...task}
        onClick={() => {
          props.dispatch(finishTask(task.id, {is_finished: true}));
        }}
      />
    })}
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    tasks: state
  }
}

export default connect(mapStateToProps)(IndexTaskPage)