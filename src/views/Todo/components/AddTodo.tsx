import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
  })
);

type AddToDoProps = {
  onAddTask?: (todo: string) => void;
};

const AddTodo = ({ onAddTask }: AddToDoProps) => {
  const classes = useStyles();
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim() && onAddTask) {
      onAddTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <div className={`${classes.root} input-div`} >
      <TextField
        id="addTaskInput"
        label="Title"
        variant="outlined"
        margin="dense"
        autoFocus={true}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <AddCircleOutlineIcon onClick={handleAddTask} sx={{ fontSize: 50, color:'rgb(91 91 91 / 87%)' }} className='curser'/>
    </div>
  );
};

export default AddTodo;
