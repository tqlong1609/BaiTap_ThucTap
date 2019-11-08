/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {View, Text, FlatList} from 'react-native';
import styles from './styles.js';
import ItemNumber from './ItemNumber';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadData();
  }

  render() {
    const {arrData, arrTemp} = this.props;
    console.log('arrTmp', arrTemp);
    return (
      <View style={styles.container}>
        <View style={styles.containerFlatlist}>
          <FlatList
            style={styles.flatList}
            data={arrData}
            renderItem={({item, index}) => (
              <ItemNumber value={item.label} index={index} />
            )}
            numColumns={5}
            horizontal={false}
          />
        </View>
        <View style={styles.containerSelectNumber}>
          <Text style={styles.textSelectNumber}>Slected number: </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    arrData: state.arrData,
    arrTemp: state.arrTemp,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadData: () => dispatch({type: 'loadData'}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
