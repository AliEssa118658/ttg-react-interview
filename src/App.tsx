import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from './views/Todo/components/AddTodo';
import TaskList from './views/Todo/components/TaskList';
import store from './reducers/stores';
import { setTodos, addTodo } from './views/Todo/actions';
import Logo from './assets/img/logo.png'
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
  })
);

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos());
  }, [dispatch]);

  const handleAddTask = (title: string) => {
    dispatch(addTodo(title));
  };

  return (
    <div className="flex-col">
      <img src={Logo} alt="Logo" className='logo' />
      <AddTodo onAddTask={handleAddTask} />
      <TaskList />
    </div>
  );
};

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;
