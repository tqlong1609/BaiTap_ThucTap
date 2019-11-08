import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efe0e1',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },

  containerFlatlist: {
    borderRadius: 7,
    flex: 10,
    borderWidth: 2,
    margin: 10,
    justifyContent: 'space-between',
  },

  flatList: {
    flex: 1,
  },

  itemsFlatlist: {
    width: '20%',
  },

  itemsView: {
    borderWidth: 2,
    height: 50,
    margin: 5,
    justifyContent: 'center',
  },

  textItemsFlatList: {
    alignSelf: 'center',
  },

  containerSelectNumber: {
    backgroundColor: '#93b34e',
    flex: 4,
    borderWidth: 2,
    margin: 5,
    justifyContent: 'center',
  },

  textSelectNumber: {
    alignSelf: 'center',
    fontSize: 20,
  },

  containerItemNumber: {
    alignSelf: 'center'
  },
});

export default styles;
