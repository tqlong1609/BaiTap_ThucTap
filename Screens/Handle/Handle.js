import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Handle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    // this.setState({nameScreen: this.props.navigation.state.params.nameTitle});
    return (
      <View>
        <Text> Screen Handle </Text>
      </View>
    );
  }
}

export default Handle;
