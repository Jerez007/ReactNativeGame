import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false}/>
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
        shadowOpacity: 0.25 // for iOS
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});