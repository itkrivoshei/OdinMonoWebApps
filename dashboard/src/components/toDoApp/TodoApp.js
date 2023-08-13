import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  addProject,
} from '../../redux/actions/todoActions';

class TodoApp extends React.Component {
  // Lifecycle method to fetch todos once the component has mounted.
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, addTodo, deleteTodo, addProject } = this.props;

    return (
      <div>
        <AddProject addProject={addProject} />
        <ProjectList />
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

// Maps the Redux state to this component's props.
const mapStateToProps = (state) => {
  // Retrieves the todos of the currently active project.
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
