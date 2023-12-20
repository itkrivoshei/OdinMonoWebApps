import React from 'react';
import { connect } from 'react-redux';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import {
  addToDo,
  deleteToDo,
  fetchToDos,
  addProject,
} from '../../redux/actions/toDoActions';
import './index.scss';

export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Project {
  id: number;
  title: string;
  toDos: ToDo[];
}

interface ToDoAppProps {
  toDos: ToDo[];
  addToDo: (text: string) => void;
  deleteToDo: (id: number) => void;
  fetchToDos: () => void;
  addProject: (title: string) => void;
}

export interface State {
  toDos: {
    projects: Project[];
    activeProject: number;
  };
}

class ToDoApp extends React.Component<ToDoAppProps> {
  // Lifecycle method to fetch toDos once the component has mounted.
  componentDidMount() {
    this.props.fetchToDos();
  }

  render() {
    const { toDos, addToDo, deleteToDo } = this.props;

    return (
      <div className='toDoapp'>
        <h1>ToDo App</h1>
        <h2>Projects</h2>
        <AddProject />
        <ProjectList />
        <h2>ToDo&apos;s</h2>
        <AddToDo addToDo={addToDo} />
        <ToDoList toDos={toDos} deleteToDo={deleteToDo} />
      </div>
    );
  }
}

// Maps the Redux state to this component's props.
const mapStateToProps = (state: State) => {
  const activeProject = state.toDos.projects.find(
    (project) => project.id === state.toDos.activeProject
  );
  return {
    toDos: activeProject ? activeProject.toDos : [],
  };
};

// Maps the Redux dispatch actions to this component's props.
const mapDispatchToProps = {
  addToDo,
  deleteToDo,
  fetchToDos,
  addProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
