import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SET_ACTIVE_PROJECT,
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
    case ADD_TODO:
      // Map through projects and add todo to the active project's todos array.
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

    case DELETE_TODO:
      // Map through projects and remove todo from the active project's todos array.
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

    case FETCH_TODOS:
      // If fetched todos are valid, create a new project with fetched todos.
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          projects: [
            ...state.projects,
            { id: Date.now(), title: 'Fetched Todos', todos: action.payload },
          ],
        };
      } else {
        console.error('Invalid FETCH_TODOS payload:', action.payload);
        return state;
      }

    case SET_ACTIVE_PROJECT:
      // Update the active project in the state.
      return {
        ...state,
        activeProject: action.payload,
      };

    default:
      // Return the existing state if the action type is not handled.
      return state;
  }
};

export default todoReducer;
