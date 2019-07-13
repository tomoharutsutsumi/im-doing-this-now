// @flow
import React from 'react';

type Props = {
  requester: String,
  worker: String,
  startDate: Date,
  deadlineDate: Date,
  contents: String,
  isFinished: Boolean,
  expired: Boolean,
  checker: String,
  onClick: (e: Event) => void
}

export default ({
  requester, worker, startDate, deadlineDate, contents, isFinished, expired, checker, onClick,
}: Props) => (
  <div className={expired ? 'task-item--expired' : 'task-item'}>
    {expired && <div>This task is expired</div>}
    {!isFinished && <div className="task-item__button" onClick={onClick}>Finished</div>}
    {isFinished && (
    <div>
CheckedBy:
      {' '}
      {checker}
    </div>
    )}
    <div className="task-item__requester">
    Requester:
      {requester}
    </div>
    <div className="task-item__worker">
    Worker:
      {worker}
    </div>
    <div className="task-item__start-date">
    StartDate:
      {startDate}
    </div>
    <div className="task-item__deadline-date">
    DeadlineDate:
      {deadlineDate}
    </div>
    <div className="task-item__contents">
    Contents:
      {contents}
    </div>
  </div>
);
