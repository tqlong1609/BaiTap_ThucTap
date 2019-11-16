import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333232',
    display: 'flex',
    flex: 1,
  },

  containerImage: {
    backgroundColor: 'blue',
    flex: 5,
    margin: 30,
  },

  containerName: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerDescribeShort: {
    backgroundColor: 'gray',
    flex: 2,
    justifyContent: 'center',
  },
  containerDescribeLong: {
    backgroundColor: 'pink',
    flex: 4,
    justifyContent: 'center',
  },

  textName: {
    color: 'white',
    alignSelf: 'center',
    margin: 10,
    fontSize: 17,
  },

  textDescribeShort: {
    color: 'white',
    fontSize: 25,
    margin: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  textDescribeLong: {
    color: 'white',
    fontSize: 25,
    margin: 10,
    alignSelf: 'center',
  },
});

export default styles;
