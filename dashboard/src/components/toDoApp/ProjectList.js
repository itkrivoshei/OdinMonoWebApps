import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveProject,
  deleteProject,
} from '../../redux/actions/todoActions';

function ProjectList() {
  // Retrieve list of projects from the Redux state.
  const projects = useSelector((state) => state.todos.projects) || [];
  const dispatch = useDispatch();

  // Handles click event on a project, setting it as the active project.
  const handleProjectClick = (projectId) => {
    dispatch(setActiveProject(projectId));
  };

  // Handles the event when the delete button of a project is clicked.
  const handleProjectDelete = (projectId) => {
    dispatch(deleteProject(projectId));
  };

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <span onClick={() => handleProjectClick(project.id)}>
            {project.title}
          </span>
          {/* Don't allow deletion of the default project */}
          {project.id !== 'default' && (
            <button onClick={() => handleProjectDelete(project.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
