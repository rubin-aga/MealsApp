import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorites';
import PerMealsReducer from './PerMeals';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer,
        myMeals: PerMealsReducer,
    },
});
