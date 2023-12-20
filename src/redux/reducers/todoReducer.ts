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
} from '../actions/toDoActionTypes';

// Type definitions
interface ToDo {
  id: number;
  text: string;
  completed?: boolean;
}

interface Project {
  id: number | string;
  title: string;
  toDos: ToDo[];
}

interface ToDoState {
  projects: Project[];
  activeProject: string | number;
}

interface Action {
  type: string;
  payload?: any;
}

// Initial state structure for the Redux store.
export const initialState: ToDoState = {
  projects: [
    {
      id: 'default',
      title: 'Default Project',
      toDos: [],
    },
  ],
  activeProject: 'default',
};

const toDoReducer = (state = initialState, action: Action): ToDoState => {
  switch (action.type) {
    // Handles the addition of a toDo item to the active project.
    case ADD_TODO:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.activeProject
            ? {
                ...project,
                toDos: [
                  ...project.toDos,
                  { id: Date.now(), text: action.payload },
                ],
              }
            : project
        ),
      };

    // Handles the deletion of a toDo item from the active project.
    case DELETE_TODO:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.activeProject
            ? {
                ...project,
                toDos: project.toDos.filter(
                  (toDo) => toDo.id !== action.payload
                ),
              }
            : project
        ),
      };

    // Handles fetching and integrating remote toDos into a new project.
    case FETCH_TODOS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          projects: [
            ...state.projects,
            { id: Date.now(), title: 'Fetched ToDos', toDos: action.payload },
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
          { id: Date.now(), title: action.payload, toDos: [] },
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
                toDos: project.toDos.map((toDo) =>
                  toDo.id === action.payload.id
                    ? { ...toDo, text: action.payload.newText }
                    : toDo
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
                toDos: project.toDos.map((toDo) =>
                  toDo.id === action.payload
                    ? { ...toDo, completed: !toDo.completed }
                    : toDo
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

export default toDoReducer;
