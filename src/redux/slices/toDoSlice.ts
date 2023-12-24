import { createSlice } from '@reduxjs/toolkit';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export interface Project {
  id: number | string;
  title: string;
  toDos: ToDo[];
}

interface ToDoState {
  projects: Project[];
  activeProject: string | number;
}

const initialState: ToDoState = {
  projects: [
    {
      id: 'default',
      title: 'Default Project',
      toDos: [],
    },
  ],
  activeProject: 'default',
};

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);

      if (project) {
        project.toDos.push({
          id: Date.now(),
          text: action.payload,
          completed: false,
        });
      }
    },

    deleteToDo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);

      if (project) {
        project.toDos = project.toDos.filter(
          (toDo) => toDo.id !== action.payload
        );
      }
    },

    fetchToDos: (state, action) => {
      const newProject = {
        id: Date.now(),
        title: 'Fetched ToDos',
        toDos: action.payload,
      };

      state.projects.push(newProject);
    },

    addProject: (state, action) => {
      state.projects.push({ id: Date.now(), title: action.payload, toDos: [] });
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

    editToDo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);
      const toDo = project?.toDos.find((t) => t.id === action.payload.toDoId);

      if (toDo) {
        toDo.text = action.payload.newText;
      }
    },

    toggleToDo: (state, action) => {
      const project = state.projects.find((p) => p.id === state.activeProject);
      const toDo = project?.toDos.find((t) => t.id === action.payload);

      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },
  },
});

export const {
  addToDo,
  deleteToDo,
  fetchToDos,
  addProject,
  setActiveProject,
  deleteProject,
  editProject,
  editToDo,
  toggleToDo,
} = toDoSlice.actions;

export default toDoSlice.reducer;
