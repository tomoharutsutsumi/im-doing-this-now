import uuid from 'uuid';
export const addTasks = (
	{
		requester = '',
		worker = '',
		start_date = 0,
		deadline_date = 0,
		contents = ''
	} = {}
) => ({
	type: 'ADD_TASK',
	payload: {
		id: uuid(),
		requester,
		worker,
		start_date,
		deadline_date,
		contents
	}
})