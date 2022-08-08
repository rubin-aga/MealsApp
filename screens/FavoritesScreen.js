import { Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { View } from 'react-native';
import MealsList from '../components/MealList';
import { useSelector } from 'react-redux';

export default function FavortiesScreen() {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) =>
        favoriteMealIds.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View>
                <Text>You have no favorite meals yet</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
}
