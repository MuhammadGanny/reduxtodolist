import { combineReducers } from 'redux';
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK } from './actions';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      );
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      );
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
