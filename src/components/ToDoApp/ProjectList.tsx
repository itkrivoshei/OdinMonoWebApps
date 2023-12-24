import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import {
  setActiveProject,
  deleteProject,
  editProject,
} from '../../redux/slices/toDoSlice';
import { Project } from '../../redux/slices/toDoSlice';

function ProjectList() {
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
    <ul>
      {projects.map((project: Project) => (
        <li key={project.id}>
          {isEditing === project.id ? (
            <>
              <input value={newName} onChange={handleNameChange} />
              <button onClick={() => handleSaveClick(project.id)}>Save</button>
            </>
          ) : (
            <>
              <span onClick={() => handleProjectClick(project.id)}>
                {project.title}
              </span>
              <div>
                <button
                  onClick={() => handleEditClick(project.id, project.title)}
                >
                  Edit
                </button>
                {project.id !== 'default' && (
                  <button onClick={() => handleProjectDelete(project.id)}>
                    Delete
                  </button>
                )}
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
