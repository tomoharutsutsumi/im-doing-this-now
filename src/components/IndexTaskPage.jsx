// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { finishTask } from '../actions/tasks';
import selectExpiredTasks from '../selectors/selectExpiredTasks';
import FinishModal from './FinishModal';

type Props = {
  dispatch: (e: Event) => void,
  tasks: Array<any>
}

const IndexTaskPage = ({ dispatch, tasks }: Props) => {
  const [modalIsOpen, displayModal] = useState(false);
  const [taskId, selectId] = useState(0);
  return (
    <div>
      {tasks.map((task) => {
        if (task.isFinished) return null;
        return (
          <TaskItem
            key={task.id}
            {...task}
            expired={selectExpiredTasks(task)}
            onClick={() => {
              displayModal(true);
              selectId(task.id);
            }}
          />
        );
      })}
      <FinishModal
        isOpen={modalIsOpen}
        finishTask={checkedBy => dispatch(finishTask(taskId, { isFinished: true }, checkedBy))}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(IndexTaskPage);
