import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModule: {},
    activeLesson: {},
    modules: [
        {
            id: 1, title: 'Módulo 1', lessons: [
                { id: 1, title: 'Aula 1'},
                { id: 2, title: 'Aula 2'}
                
            ]
        },
        {
            id: 2, title: 'Módulo 2', lessons: [
                { id: 3, title: 'Aula 3'},
                { id: 4, title: 'Aula 4'}
                
            ]
        }        
    ],
};

export const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setActiveModule: (state, action) => {
            state.activeModule = action.payload
        },
        setActiveLessonAndModule: (state, action) => {
            state.activeLesson = action.payload.lesson
            state.activeModule = action.payload.module
        },
    },
});

export const { setActiveModule, setActiveLessonAndModule } = modulesSlice.actions;

export default modulesSlice.reducer;
