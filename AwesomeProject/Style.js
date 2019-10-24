
import {StyleSheet,} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
  },

  // Handle group: Text
  handleGroup: {
    flex: 1,
    backgroundColor: 'blue',
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
  }
  //end header information
});

export default styles;

export const A = 'a';
export const B = 'a';