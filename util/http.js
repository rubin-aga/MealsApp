import axios from 'axios';

const BACKEND_URL =
    'https://task-app-669e0-default-rtdb.europe-west1.firebasedatabase.app/';

export async function storeMeal(mealData) {
    const response = await axios.post(BACKEND_URL + '/mymeals.json', mealData);
    const id = response.data.name;
    return id;
}

export async function fetchMeals() {
    const response = await axios.get(BACKEND_URL + '/mymeals.json');

    const meals = [];

    for (const key in response.data) {
        const mealObj = {
            id: key,
            title: response.data[key].title,
            imageUrl: response.data[key].imageUrl,
            affordability: response.data[key].affordability,
            complexity: response.data[key].complexity,
            duration: response.data[key].duration,
        };
        meals.push(mealObj);
    }
    return meals;
}

export function deleteMeal(id) {
    return axios.delete(BACKEND_URL + `/mymeals/${id}.json`);
}

export function updateMeal(id, mealData) {
    return axios.put(BACKEND_URL + `/mymeals/${id}.json`);
}
