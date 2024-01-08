import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteToDo, editToDo, toggleToDo } from '../../redux/slices/toDoSlice';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoItemProps {
  toDo: ToDo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ toDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(toDo.text);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteToDo(toDo.id));
  const handleEdit = () => setIsEditing(true);
  const handleToggleCompletion = () => dispatch(toggleToDo(toDo.id));

  const handleSave = () => {
    if (newName.trim()) {
      dispatch(editToDo({ toDoId: toDo.id, newText: newName }));
      setIsEditing(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewName(e.target.value);

  return (
    <Box component='li'>
      {isEditing ? (
        <Box>
          <TextField value={newName} onChange={handleChange} />
          <Button onClick={handleSave}>Save</Button>
        </Box>
      ) : (
        <Box>
          <Checkbox
            checked={!!toDo.completed}
            onChange={handleToggleCompletion}
          />
          <Typography
            variant='body1'
            style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}
          >
            {toDo.text}
          </Typography>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Box>
      )}
    </Box>
  );
};

export default ToDoItem;
