import React from 'react';

export const TaskItem = ({
  requester, worker, startDate, deadLineDate, contents, isFinished, onClick,
}) => (
  <div>
    <p>{requester}</p>
    <p>{worker}</p>
    <p>{startDate}</p>
    <p>{deadLineDate}</p>
    <p>{contents}</p>
    {!isFinished && <p onClick={onClick}>Finished</p>}
  </div>
);
