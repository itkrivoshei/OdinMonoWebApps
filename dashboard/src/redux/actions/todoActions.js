export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const fetchTodos = () => async (dispatch) => {
  // Simulating a fetch call
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => resolve([{ id: 1, text: 'First todo' }]), 2000);
  });

  dispatch({
    type: 'FETCH_TODOS',
    payload: response,
  });
};
