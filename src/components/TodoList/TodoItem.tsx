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

import { deleteTodo, editTodo, toggleTodo } from '../../redux/slices/toDoSlice';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleEdit = () => setIsEditing(true);
  const handleToggleCompletion = () => dispatch(toggleTodo(todo.id));

  const handleSave = () => {
    if (newName.trim()) {
      dispatch(editTodo({ todoId: todo.id, newText: newName }));
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
            opacity: todo.completed ? 0.5 : 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Checkbox
              checked={!!todo.completed}
              onChange={handleToggleCompletion}
            />
            <Typography
              variant='body1'
              sx={{ wordBreak: 'break-word' }}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
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
export default TodoItem;
