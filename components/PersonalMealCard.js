import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import MealDetails from './MealDetails';
import { removeMeal } from '../store/redux/PerMeals';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMeal } from '../util/http';
export default function PersonalMealCard(item) {
    const dispatch = useDispatch();

    async function deleteMealCard() {
        await deleteMeal(item.mealObj.id);
        dispatch(removeMeal({ myMealObjs: item.mealObj }));
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                onPress={deleteMealCard}
            >
                <View>
                    <Image
                        source={{ uri: item.mealObj.imageUrl }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{item.mealObj.title}</Text>
                </View>
                <MealDetails
                    duration={item.mealObj.duration}
                    affordability={item.mealObj.affordability}
                    complexity={item.mealObj.complexity}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
    },

    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});
