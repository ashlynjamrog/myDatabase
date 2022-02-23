import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    display: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'white',
      padding: 10,
      height: 30,
      //width: '50%',
      //flexDirection:'row', 
      alignItems:'center',
      justifyContent: 'space-evenly',
      //flex:1,
      // flexDirection: 'row',
      // alignSelf: 'center',
      },
      displayBox: {
        backgroundColor: '#D3D3D3',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        //width: 1400,
        flex: 1,
        //height: 1000,
    padding:10,
    //justifyContent: 'space-evenly'
      },
      left: {
        //flex: 1,
       // flexWrap: '',
        //width: '0%',
        flexDirection: 'row',
        alignSelf: 'center',
        
      },
      right: {
        flex: 1,
        flexWrap: 'wrap',
        width: '50%',
        alignSelf: 'flex-end'
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
      container: {
        flex: 1,
        paddingTop: 22
       },
       item: {
         fontSize: 12,
         height: 20,
         paddingLeft: 5,
         border: '0.5px solid gray',
       },
       select: {
        backgroundColor: '#1E90FF',
        fontSize: 12,
        height: 20,
        paddingLeft: 5,
        border: '0.5px solid gray',
       },
       listBox: {
         backgroundColor: 'white',
         flex: 1,
        // width: '50%',
       }
       
});