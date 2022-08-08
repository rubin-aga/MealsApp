import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import AddMealScreen from './screens/AddMealScreen';
import MyMealsScreen from './screens/MyMealsScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#5c4e38' },
                headerTintColor: 'black',
                sceneContainerStyle: { backgroundColor: '#AC9266' },
                drawerContentStyle: { backgroundColor: '#5c4e38' },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1',
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: (color, size) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favourites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: (color, size) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="AddMeal"
                component={AddMealScreen}
                options={{
                    drawerIcon: (color, size) => (
                        <Ionicons name="fast-food" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="MyMeals"
                component={MyMealsScreen}
                options={{
                    drawerIcon: (color, size) => (
                        <Ionicons
                            name="file-tray-full"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="dark"></StatusBar>
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: '#351401' },
                            headerTintColor: 'white',
                            contentStyle: { backgroundColor: '#AC9266' },
                        }}
                    >
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealsOverview"
                            component={MealsOverviewScreen}
                        />
                        <Stack.Screen
                            name="MealDetail"
                            component={MealDetailScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
