import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import {connect} from 'react-redux';

class ItemNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isSelect: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      index: nextProps.index,
      isSelect: nextProps.arrTemp[prevState.index] ? true : false,
    };
  }

  shouldComponentUpdate(nextProps) {
    const newIsSelect = nextProps.arrTemp[this.state.index] ? true : false;

    const {isSelect} = this.state;
    // console.log('isselect',isSelect)
    // console.log('newIsSelect', newIsSelect)
    if (newIsSelect != isSelect) {
      return true;
    }

    return false;
  }

  render() {
    console.log('===isRender');

    const {isSelect} = this.state;
    return (
      <View style={styles.itemsFlatlist}>
        <View
          style={[
            styles.itemsView,
            {backgroundColor: isSelect ? 'red' : 'transparent'},
          ]}>
          <TouchableOpacity
            onPress={() => {
              this.props.onSendIndex(this.state.index, this.state.isSelect);
            }}>
            <View style={styles.containerItemNumber}>
              <Text>{this.props.value}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    arrTemp: state.arrTemp,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSendIndex: (index, isSelect) =>
      dispatch({type: 'sendIndex', value: {index, isSelect}}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemNumber);
