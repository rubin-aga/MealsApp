import { View, FlatList, StyleSheet } from 'react-native';
import PersonalMealCard from './PersonalMealCard';

export default function MyList({ items }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PersonalMealCard mealObj={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
