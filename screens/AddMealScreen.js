import { View } from 'react-native';
import MealForm from '../components/MealForm';
import Meal from '../models/meal';
import { useSelector, useDispatch } from 'react-redux';
import { addMeal, removeMeal } from '../store/redux/PerMeals';
import { storeMeal, fetchMeals, deleteMeal } from '../util/http';

export default function AddMealScreen({ navigation }) {
    const myMeals = useSelector((state) => state.myMeals.myMealObjs);

    async function onSubmit(mealData) {
        const id = await storeMeal(mealData);
        mealData.id = id;
        //        dispatch(addMeal({ myMealObjs: mealData }));
    }

    return (
        <View>
            <MealForm onSubmit={onSubmit} />
        </View>
    );
}
