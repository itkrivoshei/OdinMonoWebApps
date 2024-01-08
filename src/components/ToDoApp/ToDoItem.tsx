import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Checkbox,
  Paper,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 300,
            margin: 'auto',
          }}
        >
          <TextField
            value={newName}
            size='small'
            onChange={handleChange}
            fullWidth
          />
          <IconButton onClick={handleSave} aria-label='save'>
            <SaveIcon />
          </IconButton>
        </Box>
      ) : (
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#c8b6ff',
            margin: '1',
            padding: '1',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Checkbox
              checked={!!toDo.completed}
              onChange={handleToggleCompletion}
            />
            <Typography
              variant='body1'
              style={{
                textDecoration: toDo.completed ? 'line-through' : 'none',
              }}
            >
              {toDo.text}
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={handleEdit} aria-label='edit'>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete} aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ToDoItem;
