import uuid from 'uuid';
export const addTask = (
	{
		requester = '',
		worker = '',
		start_date = 0,
		deadline_date = 0,
    contents = '',
    is_finished = false
	}
) => ({
	type: 'ADD_TASK',
	payload: {
		id: uuid(),
		requester,
		worker,
		start_date,
		deadline_date,
    contents,
    is_finished
	}
})

export const finishTask = (id, is_finished) => ({
  type: 'FINISH_TASK',
  id,
  is_finished
})