const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    case 'FETCH_TODOS':
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
