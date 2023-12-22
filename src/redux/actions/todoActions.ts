export enum ToDoActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
  SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT',
  ADD_PROJECT = 'ADD_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
  EDIT_PROJECT = 'EDIT_PROJECT',
  EDIT_TODO = 'EDIT_TODO',
  TOGGLE_TODO_COMPLETION = 'TOGGLE_TODO_COMPLETION',
}

export const addToDo = (text: string) => ({
  type: ToDoActionType.ADD_TODO,
  payload: text,
});

interface DeleteToDoAction {
  type: typeof ToDoActionType.DELETE_TODO;
  payload: number | string;
}

export const deleteToDo = (id: number | string): DeleteToDoAction => ({
  type: ToDoActionType.DELETE_TODO,
  payload: id,
});

export const fetchToDos = () => async (dispatch: any) => {
  dispatch({
    type: ToDoActionType.FETCH_TODOS,
  });
};

export const addProject = (title: string) => ({
  type: ToDoActionType.ADD_PROJECT,
  payload: title,
});

export const setActiveProject = (projectId: number | string) => ({
  type: ToDoActionType.SET_ACTIVE_PROJECT,
  payload: projectId,
});

export const deleteProject = (projectId: number | string) => ({
  type: ToDoActionType.DELETE_PROJECT,
  payload: projectId,
});

export const editProject = (projectId: number | string, newName: string) => ({
  type: ToDoActionType.EDIT_PROJECT,
  payload: {
    projectId,
    newName,
  },
});

export const editToDo = (toDoId: number | string, newText: string) => ({
  type: ToDoActionType.EDIT_TODO,
  payload: {
    toDoId,
    newText,
  },
});

export const toggleToDo = (toDoId: number | string) => ({
  type: ToDoActionType.TOGGLE_TODO_COMPLETION,
  payload: toDoId,
});
