import { createSlice } from '@reduxjs/toolkit';
import { fetchMeals } from '../../util/http';

const PerMeals = createSlice({
    name: 'permeals',
    initialState: {
        myMealObjs: [],
    },
    reducers: {
        addMeal: (state, action) => {
            state.myMealObjs.push(action.payload);
        },
        removeMeal: (state, action) => {
            state.myMealObjs.splice(
                state.myMealObjs.indexOf(action.payload.obj),
                1
            );
        },
        setMeals: (state, action) => {
            state.myMealObjs = fetchMeals();
        },
    },
});

export const addMeal = PerMeals.actions.addMeal;
export const removeMeal = PerMeals.actions.removeMeal;
export const setMeals = PerMeals.actions.setMeals;
export default PerMeals.reducer;
