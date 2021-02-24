import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    display: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        padding: 10,
      },
      displaydisabled: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'gray',
        padding: 10,
      },
      displayBox: {
        backgroundColor: '#D3D3D3',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        width: 325,
        height: 300,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "space-around",
        flexDirection: "column"
      },
      title: {
          color: '#000',
          textAlign: 'center',
          fontSize: 18,
          //flex: 0.5,
          //padding: 5,
      },
      inputBox: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        width: 75,
        height: 25,
        backgroundColor: 'black',
        color: 'white',
      },
})