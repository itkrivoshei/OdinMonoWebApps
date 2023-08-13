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
  // Fetch todos when component mounts.
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

// Map state to props to provide active project's todos to TodoList component.
const mapStateToProps = (state) => {
  // Check if projects exist in state and if it's an array.
  if (state.todos && Array.isArray(state.todos.projects)) {
    // Find the active project.
    const activeProject = state.todos.projects.find(
      (project) => project.id === state.todos.activeProject
    );
    // Return active project's todos or an empty array if not found.
    return {
      todos: activeProject ? activeProject.todos : [],
    };
  } else {
    // Return an empty array if projects is not defined or not an array.
    return {
      todos: [],
    };
  }
};

// Map dispatch actions to props.
const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  fetchTodos,
  addProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
