import { useState } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Text,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';

import Input from './Input';

// id,
// title,
// imageUrl,
// duration,
// complexity,
// affordability,

// id,
// categoryIds,
// title,
// affordability,
// complexity,
// imageUrl,
// duration,
// ingredients,
// steps,
// isGlutenFree,
// isVegan,
// isVegetarian,
// isLactoseFree

export default function MealForm({ onCancel, onSubmit }) {
    const [inputValues, setInputValues] = useState({
        id: '',
        title: '',
        affordability: '',
        complexity: '',
        imageUrl: '',
        duration: '',
        ingredients: '',
        steps: '',
        isGlutenFree: false,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: false,
    });

    function onCancel() {
        navigation.goBack();
        setInputValues({
            id: '',
            title: '',
            affordability: '',
            complexity: '',
            imageUrl: '',
            duration: '',
            ingredients: '',
            steps: '',
            isGlutenFree: false,
            isVegan: false,
            isVegetarian: false,
            isLactoseFree: false,
        });
    }

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue,
            };
        });
    }

    function submitHandler() {
        const mealData = {
            //id : inputValues.id,
            title: inputValues.title,
            imageUrl: inputValues.imageUrl,
            affordability: inputValues.affordability,
            complexity: inputValues.complexity,
            duration: inputValues.duration,
        };
        onSubmit(mealData);

        setInputValues({
            id: '',
            title: '',
            affordability: '',
            complexity: '',
            imageUrl: '',
            duration: '',
            ingredients: '',
            steps: '',
            isGlutenFree: false,
            isVegan: false,
            isVegetarian: false,
            isLactoseFree: false,
        });
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="height" style={styles.kbview}>
                <View style={styles.form}>
                    <Text style={styles.title}>Your Meal</Text>
                    <View style={styles.formItems}>
                        {/* <Input
                            label="ID"
                            textInputConfig={{
                                placeholder: 'id',
                                onChangeText: inputChangedHandler.bind(
                                    this,
                                    'id'
                                ),
                                value: inputValues.id,
                            }}
                        /> */}
                        <Input
                            label="Title"
                            textInputConfig={{
                                placeholder: 'title',
                                onChangeText: inputChangedHandler.bind(
                                    this,
                                    'title'
                                ),
                                value: inputValues.title,
                            }}
                        />
                        <Input
                            label="Image URL"
                            textInputConfig={{
                                placeholder: 'imageUrl',
                                onChangeText: inputChangedHandler.bind(
                                    this,
                                    'imageUrl'
                                ),
                                value: inputValues.imageUrl,
                            }}
                        />
                        <Input
                            label="Duration"
                            textInputConfig={{
                                placeholder: 'duration',
                                onChangeText: inputChangedHandler.bind(
                                    this,
                                    'duration'
                                ),
                                value: inputValues.duration,
                            }}
                        />
                        <Input
                            label="Complexity"
                            textInputConfig={{
                                placeholder: 'complexity',
                                onChangeText: inputChangedHandler.bind(
                                    this,
                                    'complexity'
                                ),
                                value: inputValues.complexity,
                            }}
                        />
                        <Input
                            label="Affordability"
                            textInputConfig={{
                                placeholder: 'affordability',
                                onChangeText: inputChangedHandler.bind(
                                    this,
                                    'affordability'
                                ),
                                value: inputValues.affordability,
                            }}
                        />
                    </View>

                    <View style={styles.buttons}>
                        <Button
                            style={styles.button}
                            onPress={onCancel}
                            title="Cancel"
                            color="#eb8263"
                            accessibilityLabel="Learn more about this purple button"
                        />
                        <Button
                            style={styles.button}
                            onPress={submitHandler}
                            title="Submit"
                            color="#a0e046"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    kbview: {
        flex: 1,
    },
    form: {
        marginTop: 40,
    },
    formItems: {
        marginHorizontal: 100,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 80,
        marginVertical: 90,
    },
    button: {
        minWidth: 120,
        marginHorizontal: 16,
        paddingHorizontal: 12,
    },
});
