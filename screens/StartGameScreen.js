import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 20,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 4, //for shadow in android only
        shadowColor: 'black',  // for iOS
        shadowOffset: { width: 0, height: 2 }, // for iOS
        shadowRadius: 6, // for iOS
        shadowOpacity:  0.25 // for iOS
    }
});