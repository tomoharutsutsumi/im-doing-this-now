import React from 'react';

export const TaskItem = ({ requester, worker, start_date, deadline_date, contents }) => (
  <div>
    <p>{requester}</p>
    <p>{worker}</p>
    <p>{start_date}</p>
    <p>{deadline_date}</p>
    <p>{contents}</p>
  </div>
)
