import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveProject,
  deleteProject,
  editProject,
} from '../../redux/actions/todoActions';
import { State, Project } from './ToDoApp';

function ProjectList() {
  // State variables for inline editing.
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>('');

  // Retrieve list of projects from the Redux state.
  const projects = useSelector((state: State) => state.todos.projects) || [];
  const dispatch = useDispatch();

  // Handles click event on a project, setting it as the active project.
  const handleProjectClick = (projectId: number) => {
    dispatch(setActiveProject(projectId));
  };

  // Handles the event when the delete button of a project is clicked.
  const handleProjectDelete = (projectId: number) => {
    dispatch(deleteProject(projectId));
  };

  // Initiates the edit mode for a project name.
  const handleEditClick = (projectId: number, currentName: string) => {
    setIsEditing(projectId);
    setNewName(currentName); // Pre-fill the input with the current project name.
  };

  // Handles changes in the input box during editing.
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  // Finalizes the editing process and updates the project name in the Redux state.
  const handleSaveClick = (projectId: number) => {
    if (newName.trim()) {
      dispatch(editProject(projectId, newName));
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
              <button onClick={() => handleEditClick(project.id, project.title)}>
                Edit
              </button>
              {project.id !== 0 && (
                <button onClick={() => handleProjectDelete(project.id)}>
                  Delete
                </button>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
