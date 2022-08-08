import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { Button } from 'react-native-web';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const dispatch = useDispatch();

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="white"
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
