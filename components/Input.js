import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function Input({ label, textInputConfig }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.inputStyles} {...textInputConfig} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: 'white',
        marginBottom: 4,
    },
    input: {
        backgroundColor: 'teal',
        color: 'yellow',
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
});
