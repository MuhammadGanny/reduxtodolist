export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

let nextTaskId = 1;

export const addTask = title => ({
  type: ADD_TASK,
  payload: {
    id: nextTaskId++,
    title,
    completed: false
  }
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: id
});

export const editTask = (id, newTitle) => ({
    type: EDIT_TASK,
    payload: { id, newTitle }
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
});
