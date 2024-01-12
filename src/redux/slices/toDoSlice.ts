import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Project {
  id: number | string;
  title: string;
  todos: Todo[];
}

interface TodoState {
  projects: Project[];
  activeProject: string | number;
}

const initialState: TodoState = {
  projects: [
    {
      id: 'default',
      title: 'Default Project',
      todos: [],
    },
  ],
  activeProject: 'default',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);

      if (project) {
        project.todos.push({
          id: Date.now(),
          text: action.payload,
          completed: false,
        });
      }
    },

    deleteTodo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);

      if (project) {
        project.todos = project.todos.filter(
          (todo) => todo.id !== action.payload
        );
      }
    },

    fetchTodos: (state, action) => {
      const newProject = {
        id: Date.now(),
        title: 'Fetched Todos',
        todos: action.payload,
      };

      state.projects.push(newProject);
    },

    addProject: (state, action) => {
      state.projects.push({ id: Date.now(), title: action.payload, todos: [] });
    },

    setActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },

    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
      if (state.activeProject === action.payload) {
        state.activeProject = 'default';
      }
    },

    editProject: (state, action) => {
      const project = state.projects.find(
        (p) => p.id === action.payload.projectId
      );

      if (project) {
        project.title = action.payload.newName;
      }
    },

    editTodo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);
      const todo = project?.todos.find((t) => t.id === action.payload.todoId);

      if (todo) {
        todo.text = action.payload.newText;
      }
    },

    toggleTodo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);
      const todo = project?.todos.find((t) => t.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  fetchTodos,
  addProject,
  setActiveProject,
  deleteProject,
  editProject,
  editTodo,
  toggleTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
