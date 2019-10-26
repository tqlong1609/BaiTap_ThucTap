import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
  },

  informationGroup: {
    flex: 2,
    flexDirection: 'row',
  },

  image: {
    flex: 2,
    width: 150,
    height: 150,
    margin: 10,
    alignSelf: 'center',
  },

  information: {
    flex: 4,
    alignSelf: 'center',
  },

  Text: {
    fontSize: 15,
    color: 'white',
  },

  buttonRefresh: {
    width: 60,
    height: 60,
    margin: 5,
  },

  buttonLion: {
    width: 100,
    height: 100,
    marginLeft: 30,
  },

  buttonAnimal1: {
    width: 70,
    height: 70,
    margin: 10
  },

  imageKnight: {
    width: 150,
    height: 150,
    margin: 10,
    alignSelf: 'center',
  },

  textKnight: {
    color: 'white',
    fontSize: 50,
    margin: 10,
    alignSelf: 'center',
    marginTop: 5,
  },

  textOutSide: {
    color: 'white',
    fontSize: 50,
    margin: 10,
    marginRight: 40,
  },

  nameGroup: {
    flexDirection: 'row',
  },

  // Handle group: Text
  bodyGroup: {
    flex: 1,
  },

  headerFootGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomFootGroup: {
    flex: 4,
    flexDirection: 'row',
  },

  itemBottomFootGroup: {
    flex: 1,
    borderWidth: 3,
    margin: 10,
    borderColor: '#797373',
  },

  buttonLeftFoot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  buttonRightFoot1: {
    backgroundColor: 'gray',
  },
});

export default styles;

export const A = 'a';
export const B = 'a';
