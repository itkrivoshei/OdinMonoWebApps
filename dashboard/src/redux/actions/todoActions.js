import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  ADD_PROJECT,
  SET_ACTIVE_PROJECT,
} from '../reducers/actionTypes';

// Action Creator: Add a new todo item
/**
 * Dispatch an action to add a new todo with the given text.
 *
 * @param {string} text - Text for the new todo.
 * @returns {object} Action object to dispatch.
 */
export const addTodo = (text) => ({
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
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

// Action Creator: Fetch todos (Note: this action currently does not fetch any data but simply dispatches the action)
/**
 * Dispatch an action to indicate that todos are being fetched.
 * (In a real-world scenario, this would involve fetching data from an API).
 *
 * @returns {function} Thunk action creator to dispatch.
 */
export const fetchTodos = () => async (dispatch) => {
  // TODO: Add actual fetching logic here. For now, it simply dispatches the action.
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
export const addProject = (title) => ({
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
export const setActiveProject = (projectId) => ({
  type: SET_ACTIVE_PROJECT,
  payload: projectId,
});
