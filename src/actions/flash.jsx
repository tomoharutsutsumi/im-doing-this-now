export const displayFlash = (display, text) => ({
  type: 'DISPLAY',
  payload: {
    display,
    text,
  },
});

export const deleteFlash = (display, text) => ({
  type: 'DELETE',
  payload: {
    display,
    text,
  },
});
