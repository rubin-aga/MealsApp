import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MyList from '../components/MyList';

import { fetchMeals } from '../util/http';

export default function MyMealsScreen() {
    const [fetchedMeals, setFetchedMeals] = useState([]);

    useEffect(() => {
        async function getDBMeals() {
            const meals = await fetchMeals();
            setFetchedMeals(meals);
        }
        getDBMeals();
    }, [fetchedMeals]);

    const ids = useSelector((state) => state.myMeals.ids);
    if (fetchedMeals.length === 0) {
        return (
            <View>
                <Text>You have no personal meals yet</Text>
            </View>
        );
    }

    return <MyList items={fetchedMeals} />;
}
