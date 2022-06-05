import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeModule: {
        id: 1, title: 'Module 1', lessons: [
            { id: 1, title: 'Lesson 1'},
            { id: 2, title: 'Lesson 2'},
            { id: 3, title: 'Lesson 3'}
            
        ]
    },
    activeLesson: { id: 1, title: 'Lesson 1'},
    modules: [
        {
            id: 1, title: 'Module 1', lessons: [
                { id: 1, title: 'Lesson 1'},
                { id: 2, title: 'Lesson 2'},
                { id: 3, title: 'Lesson 3'}
                
            ]
        },
        {
            id: 2, title: 'Module 2', lessons: [
                { id: 4, title: 'Lesson 4'},
                { id: 5, title: 'Lesson 5'}
            ]
        },
        {
            id: 3, title: 'Module 3', lessons: [
                { id: 6, title: 'Lesson 6'},
                { id: 7, title: 'Lesson 7'},
                { id: 8, title: 'Lesson 8'},
                
            ]
        }        
    ],
};

export const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setActiveLessonAndModule: (state, action) => {
            state.activeLesson = action.payload.lesson
            state.activeModule = action.payload.module
        },
    },
});

export const { setActiveLessonAndModule } = modulesSlice.actions;

export default modulesSlice.reducer;
