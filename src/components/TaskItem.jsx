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
  <div>
    <p>{requester}</p>
    <p>{worker}</p>
    <p>{startDate}</p>
    <p>{deadlineDate}</p>
    <p>{contents}</p>
    {!isFinished && <p onClick={onClick}>Finished</p>}
  </div>
);
