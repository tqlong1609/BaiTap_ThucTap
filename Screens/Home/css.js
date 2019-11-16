import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // app.js
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#333232',
  },

  viewHeader: {
    flex: 1,
  },

  viewFlatlist: {
    margin: 3,
  },

  viewBody: {
    flex: 8,
  },

  // use when update footer
  viewAdd: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },

  imageAdd: {
    width: 100,
    height: 100,
  },

  containerHeader: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },

  containerButtonMenu: {
    flex: 1,
    alignSelf: 'center',
  },

  textInputSearch: {
    margin: 20,
    flex: 5,
    alignSelf: 'center',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  imageMenu: {
    margin: 5,
    width: 50,
    height: 50,
    alignSelf: 'center',
  },

  containerFlatlist: {
    borderWidth: 2,
    margin: 2,
    height: 110,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
  },

  imageItemFlatlist: {
    margin: 5,
    width: 70,
    height: 70,
    alignSelf: 'center',
  },

  viewItemContainer: {
    justifyContent: 'center',
    flex: 1,
  },

  viewContainerNameAmount: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  viewContainerLeftItem: {
    flex: 3,
    flexDirection: 'column',
  },

  textContainerNameAmount: {
    margin: 2,
    color: 'white',
    fontSize: 17,
  },

  viewContainerBottomItem: {
    flex: 2,
    flexDirection: 'row',
  },

  viewBottomName: {
    flex: 2,
    flexDirection: 'column',
  },

  viewBottomAmount: {
    flex: 1,
  },

  viewShort: {
    flex: 1,
    flexDirection: 'row',
  },

  headerViewShort: {
    backgroundColor: '#4ebcc1',
    flex: 1,
  },

  viewTextSort: {
    margin: 5,
    flex: 35,
  },

  textSort: {
    color: '#99e06d',
  },

  containerButton: {
    flex: 2,
    flexDirection: 'row',
  },

  viewButtonRemove: {
    flex: 1,
  },

  imageRemove: {
    width: 40,
    height: 40,
  },

  viewButtonEdit: {
    flex: 1,
  },

  imageEdit: {
    width: 40,
    height: 40,
  },

  buttonDetail: {
    marginEnd: 10,
    alignSelf: 'flex-end',
    flex: 1,
  },

  textDetail: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default styles;
