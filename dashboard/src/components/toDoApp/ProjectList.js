import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveProject } from '../../redux/actions/todoActions';

function ProjectList() {
  // Retrieve list of projects from the Redux state.
  const projects = useSelector((state) => state.todos.projects) || [];
  const dispatch = useDispatch();

  // Handles click event on a project, setting it as the active project.
  const handleProjectClick = (projectId) => {
    dispatch(setActiveProject(projectId));
  };

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id} onClick={() => handleProjectClick(project.id)}>
          {project.title}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
