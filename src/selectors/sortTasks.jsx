export default tasks => tasks.sort((a, b) => (a.startDate > b.startDate ? 1 : -1));
