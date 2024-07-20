import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@material-ui/core';
import { removeTodo, toggleTodo } from '../actions';
import { Task } from '../../../types/Task';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const TaskList = () => {
  const tasks = useSelector((state: any) => state.todo.current.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <TableContainer component={Paper} style={{ width: '100%', margin: 'auto', marginTop: '50px' }}>
      <Table>
        <TableHead className='table-head'>
          <TableRow >
            <TableCell style={{width:'70%'}}>Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  className='table-body'>
          {tasks.map((task: Task) => (
            <TableRow key={task.id} style={{ backgroundColor: task.completed ? 'rgb(255 152 0)' : 'white' }}>

              <TableCell style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </TableCell>
              <TableCell className='action'>
                <HighlightOffIcon onClick={() => handleDelete(task.id)} sx={{color:'red' }} className='curser'/>
                <Checkbox
                  className="mt-2"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;
