// @flow
import React from 'react';

type Props = {
  requester: String,
  worker: String,
  startDate: Date,
  deadlineDate: Date,
  contents: String,
  isFinished: boolean,
  onClick: (e: Event) => void
}

export default ({
  requester, worker, startDate, deadlineDate, contents, isFinished, onClick,
}: Props) => (
  <div className="task-item">
    {!isFinished && <div className="task-item__button" onClick={onClick}>Finished</div>}
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
