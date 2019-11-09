import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styles from './styles.js';
import {connect} from 'react-redux';

class FooterNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strNumber: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let temp = '';
    const arrKey = Object.keys(nextProps.arrTemp);
    arrKey.map(value => {
      if (nextProps.arrTemp[value]) {
        temp += nextProps.arrData[value].label + ' ';
      }
    });
    return {
      strNumber: temp,
    };
  }

  render() {
    return (
      <View style={styles.containerSelectNumber}>
        <Text style={styles.textSelectNumber}>
          Selected number: {this.state.strNumber}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    arrTemp: state.arrTemp,
    arrData: state.arrData,
  };
};

export default connect(
  mapStateToProps,
  null,
)(FooterNumber);
