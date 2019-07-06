import uuid from 'uuid';

export const addTask = (
  {
    requester = '',
    worker = '',
    startDate = 0,
    deadLineDate = 0,
    contents = '',
    isFinished = false,
  },
) => ({
  type: 'ADD_TASK',
  payload: {
    id: uuid(),
    requester,
    worker,
    startDate,
    deadLineDate,
    contents,
    isFinished,
  },
});

export const finishTask = (id, isFinished) => ({
  type: 'FINISH_TASK',
  id,
  isFinished,
});
