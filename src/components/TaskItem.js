import React from 'react';

export const TaskItem = ({ requester, worker, start_date, deadline_date, contents,is_finished, onClick }) => (
  <div>
    <p>{requester}</p>
    <p>{worker}</p>
    <p>{start_date}</p>
    <p>{deadline_date}</p>
    <p>{contents}</p>
    {!is_finished && <p onClick={onClick}>Finished</p>}
  </div>
)
