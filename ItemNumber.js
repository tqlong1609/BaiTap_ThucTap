import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import {connect} from 'react-redux';

class ItemNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isSelect: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      index: nextProps.index,
      is_select: nextProps.arrTemp.indexOf(nextProps.index) >= 0 ? true : false,
    };
  }

  render() {
    const {isSelect: is_select} = this.state;
    return (
      <View style={styles.itemsFlatlist}>
        <View
          style={[
            styles.itemsView,
            {backgroundColor: is_select ? 'red' : 'transparent'},
          ]}>
          <TouchableOpacity
            onPress={() => {
              this.props.onSendIndex(this.state.index);
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
    onSendIndex: index => dispatch({type: 'sendIndex', value: index}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemNumber);
