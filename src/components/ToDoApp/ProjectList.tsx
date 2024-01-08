import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button, TextField } from '@mui/material';

import { RootState } from '../../redux/store';
import {
  setActiveProject,
  deleteProject,
  editProject,
} from '../../redux/slices/toDoSlice';
import { Project } from '../../redux/slices/toDoSlice';

const ProjectList: React.FC = () => {
  const [isEditing, setIsEditing] = useState<number | string | null>(null);
  const [newName, setNewName] = useState<string>('');

  const projects = useSelector((state: RootState) => state.toDo.projects) || [];
  const dispatch = useDispatch();

  const handleProjectClick = (projectId: number | string) => {
    dispatch(setActiveProject(projectId));
  };

  const handleProjectDelete = (projectId: number | string) => {
    dispatch(deleteProject(projectId));
  };

  const handleEditClick = (projectId: number | string, currentName: string) => {
    setIsEditing(projectId);
    setNewName(currentName);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSaveClick = (projectId: number | string) => {
    if (newName.trim()) {
      dispatch(editProject({ projectId, newName }));
      setIsEditing(null);
      setNewName('');
    }
  };

  return (
    <Box>
      {projects.map((project: Project) => (
        <Box key={project.id}>
          {isEditing === project.id ? (
            <Box>
              <TextField value={newName} onChange={handleNameChange} />
              <Button onClick={() => handleSaveClick(project.id)}>Save</Button>
            </Box>
          ) : (
            <Box>
              <Typography onClick={() => handleProjectClick(project.id)}>
                {project.title}
              </Typography>
              <Box>
                <Button
                  onClick={() => handleEditClick(project.id, project.title)}
                >
                  Edit
                </Button>
                {project.id !== 'default' && (
                  <Button onClick={() => handleProjectDelete(project.id)}>
                    Delete
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ProjectList;
