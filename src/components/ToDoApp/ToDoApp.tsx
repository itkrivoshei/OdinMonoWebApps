import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddToDo';
import TodoList from './ToDoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  addProject,
} from '../../redux/actions/todoActions';
import './index.scss';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Project {
  id: number;
  title: string;
  todos: Todo[];
}

interface ToDoAppProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  fetchTodos: () => void;
  addProject: (title: string) => void;
}

export interface State {
  todos: {
    projects: Project[];
    activeProject: number;
  };
}

class ToDoApp extends React.Component<ToDoAppProps> {
  // Lifecycle method to fetch todos once the component has mounted.
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, addTodo, deleteTodo } = this.props;

    return (
      <div className='todoapp'>
        <h1>Todo App</h1>
        <h2>Projects</h2>
        <AddProject />
        <ProjectList />
        <h2>Todo&apos;s</h2>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

// Maps the Redux state to this component's props.
const mapStateToProps = (state: State) => {
  const activeProject = state.todos.projects.find(
    (project) => project.id === state.todos.activeProject
  );
  return {
    todos: activeProject ? activeProject.todos : [],
  };
};

// Maps the Redux dispatch actions to this component's props.
const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  fetchTodos,
  addProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
