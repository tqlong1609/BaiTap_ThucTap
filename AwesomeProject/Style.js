
import {StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
  },

  // Handle group: Text
  handleGroup: {
    flex: 1,
    flexDirection:'row',
  },

  textInput: {
    alignSelf:'center',
    margin:20,
    height: 50,
    width:150,
    borderWidth:1,
    borderRadius:10,
    borderColor: 'white',
    color:'white',
    fontSize:20
  },

  textHandle: {
    fontSize:30,
    color:'white',
  },

  groupTotal: {
    flexDirection:'row',
    marginLeft:90,
    alignSelf:'center'
  },

  listGroup: {
    flex: 5,
    backgroundColor: 'gray',
  },

  // header information: Image, Text
  informationGroup: {
    flex: 2,
    flexDirection: 'row',
  },

  image: {
    flex: 2,
    margin: 20,
    width: 150,
    height: 150,
  },

  information: {
    alignSelf:'center',
    flex: 4,
  },

  Text: {
    fontSize: 15,
    color: 'white'
  },

  nameGroup: {
    flexDirection:'row'
  }
  //end header information


});

export default styles;

export const A = 'a';
export const B = 'a';