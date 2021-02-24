import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    displayBox: {
        backgroundColor: '#D3D3D3',
        borderRadius:4,
        borderWidth: 0.5,
        borderColor: '#000',
        width: 325,
        height: 175,
        padding: 10
    },
    title: {
        color: '#000',
        textAlign: 'center',
        fontSize: 18,
        flex: 0.5
    },
    subTitle: {
        color: '#000',
        fontSize: 14,
        textAlign: 'left',
        padding: 5
    },
    resetButton: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'black',
        width: '100%',
        height: 25,
        color: 'white',
        textAlign: 'center',
    }
});