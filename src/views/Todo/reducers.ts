import { TodoActionTypes } from './actions';
import { Task } from '../../types/Task';
import update from 'immutability-helper';
import { combineReducers } from 'redux';

interface TodoState {
  tasks: Task[];
}

const defaultState: TodoState = {
  tasks: []
};

const todoReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      return update(state, { tasks: { $push: [action.payload] } });
    case TodoActionTypes.deleteTodo:
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
      if (taskIndex > -1) {
        return update(state, { tasks: { $splice: [[taskIndex, 1]] } });
      }
      return state;
    case TodoActionTypes.setTodos:
      return { ...state, tasks: action.payload };
      // return state;
    case TodoActionTypes.toggleTodo:
    const toggleIndex = state.tasks.findIndex(task => task.id === action.payload);
    if (toggleIndex > -1) {
      const completed = !state.tasks[toggleIndex].completed;
      return update(state, { tasks: { [toggleIndex]: { completed: { $set: completed } } } });
    }
    return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  current: todoReducer,
});

export default reducer;
