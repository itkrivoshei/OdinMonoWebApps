import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
} from '../../redux/actions/todoActions';

class TodoApp extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, addTodo, deleteTodo } = this.props;

    return (
      <div>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
