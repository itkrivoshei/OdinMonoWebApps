import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_ACTIVE_PROJECT,
  EDIT_PROJECT,
  TOGGLE_TODO_COMPLETION,
  EDIT_TODO,
} from './actionTypes';

// Action Creator: Add a new todo item
/**
 * Dispatch an action to add a new todo with the given text.
 *
 * @param {string} text - Text for the new todo.
 * @returns {object} Action object to dispatch.
 */
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

// Action Creator: Delete a todo item
/**
 * Dispatch an action to delete a todo based on its ID.
 *
 * @param {number|string} id - The ID of the todo to delete.
 * @returns {object} Action object to dispatch.
 */
interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number | string;
}

export const deleteTodo = (id: number | string): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});

// Action Creator: Fetch todos
/**
 * Dispatch an action to indicate that todos are being fetched.
 * (In a real-world scenario, this would involve fetching data from an API).
 *
 * @returns {function} Thunk action creator to dispatch.
 */
export const fetchTodos = () => async (dispatch: any) => {
  // If you have a type for dispatch, replace 'any' with it.
  dispatch({
    type: FETCH_TODOS,
  });
};

// Action Creator: Add a new project
/**
 * Dispatch an action to add a new project with the given title.
 *
 * @param {string} title - Title for the new project.
 * @returns {object} Action object to dispatch.
 */
export const addProject = (title: string) => ({
  type: ADD_PROJECT,
  payload: title,
});

// Action Creator: Set the active project
/**
 * Dispatch an action to set the active project based on its ID.
 *
 * @param {number|string} projectId - The ID of the project to set as active.
 * @returns {object} Action object to dispatch.
 */
export const setActiveProject = (projectId: number | string) => ({
  type: SET_ACTIVE_PROJECT,
  payload: projectId,
});

// Action Creator: Delete a project
/**
 * Dispatch an action to delete a project based on its ID.
 *
 * @param {number|string} projectId - The ID of the project to delete.
 * @returns {object} Action object to dispatch.
 */
export const deleteProject = (projectId: number | string) => ({
  type: DELETE_PROJECT,
  payload: projectId,
});

// Action Creator: Edit project name
/**
 * Dispatch an action to edit a project's name based on its ID.
 *
 * @param {number|string} projectId - The ID of the project to edit.
 * @param {string} newName - The new name for the project.
 * @returns {object} Action object to dispatch.
 */
export const editProject = (projectId: number | string, newName: string) => ({
  type: EDIT_PROJECT,
  payload: {
    projectId,
    newName,
  },
});

/**
 * Dispatch an action to edit an existing todo based on its ID.
 *
 * @param {number|string} id - The ID of the todo to edit.
 * @param {string} newText - The updated text for the todo.
 * @returns {object} Action object to dispatch.
 */
export const editTodo = (id: number | string, newText: string) => ({
  type: EDIT_TODO,
  payload: {
    id,
    newText,
  },
});

/**
 * Dispatch an action to toggle the completion status of a todo based on its ID.
 *
 * @param {number|string} id - The ID of the todo to toggle.
 * @returns {object} Action object to dispatch.
 */
export const toggleTodo = (id: number | string) => ({
  type: TOGGLE_TODO_COMPLETION,
  payload: id,
});
