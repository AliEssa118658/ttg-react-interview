import { Dispatch } from 'redux';
import TaskService from '../../services/TasksService';
import { Task } from '../../types/Task';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
  setTodos: 'TODO/SET',
  toggleTodo: 'TODO/TOGGLE',
};

const taskService = new TaskService();

export const addTodo = (title: string) => {
  return (dispatch: Dispatch) => {
    const newTask: Task = { id: Date.now(), title, completed: false };
    taskService.addTask(newTask);
    dispatch({ type: TodoActionTypes.addTodo, payload: newTask });
  };
};

export const removeTodo = (id: number) => {
  return (dispatch: Dispatch) => {
    taskService.removeTask(id);
    dispatch({ type: TodoActionTypes.deleteTodo, payload: id });
  };
};

export const setTodos = () => {
  return (dispatch: Dispatch) => {
    const tasks = taskService.getTasks();
    dispatch({ type: TodoActionTypes.setTodos, payload: tasks });
  };
};

export const toggleTodo = (id: number) => {
  return (dispatch: Dispatch) => {
    taskService.toggleTaskCompletion(id);
    dispatch({ type: TodoActionTypes.toggleTodo, payload: id });
  };
};
