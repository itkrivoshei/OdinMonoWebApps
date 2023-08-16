import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SET_ACTIVE_PROJECT,
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  EDIT_TODO,
  TOGGLE_TODO_COMPLETION,
} from './actionTypes';

// Initial state structure for the Redux store.
export const initialState = {
  projects: [
    {
      id: 'default',
      title: 'Default Project',
      todos: [],
    },
  ],
  activeProject: 'default',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handles the addition of a todo item to the active project.
    case ADD_TODO:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.activeProject
            ? {
                ...project,
                todos: [
                  ...project.todos,
                  { id: Date.now(), text: action.payload },
                ],
              }
            : project
        ),
      };

    // Handles the deletion of a todo item from the active project.
    case DELETE_TODO:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.activeProject
            ? {
                ...project,
                todos: project.todos.filter(
                  (todo) => todo.id !== action.payload
                ),
              }
            : project
        ),
      };

    // Handles fetching and integrating remote todos into a new project.
    case FETCH_TODOS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          projects: [
            ...state.projects,
            { id: Date.now(), title: 'Fetched Todos', todos: action.payload },
          ],
        };
      }
      return state;

    // Handles setting a project as the currently active project.
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: action.payload,
      };

    // Handles the addition of a new project with a title.
    case ADD_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          { id: Date.now(), title: action.payload, todos: [] },
        ],
      };

    // Handles the deletion of an entire project.
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        // If the active project is deleted, revert to the default project.
        activeProject:
          state.activeProject === action.payload
            ? 'default'
            : state.activeProject,
      };

    case EDIT_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.projectId
            ? {
                ...project,
                title: action.payload.newName,
              }
            : project
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.activeProject
            ? {
                ...project,
                todos: project.todos.map((todo) =>
                  todo.id === action.payload.id
                    ? { ...todo, text: action.payload.newText }
                    : todo
                ),
              }
            : project
        ),
      };

    case TOGGLE_TODO_COMPLETION:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.activeProject
            ? {
                ...project,
                todos: project.todos.map((todo) =>
                  todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
                ),
              }
            : project
        ),
      };

    // Default case for any unrecognized action types.
    default:
      return state;
  }
};

export default todoReducer;
