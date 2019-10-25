import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleText = this.toggleText.bind(this);

    this.state = {
      text: 'Hello',
    };
  }

  toggleText() {
    this.setState({
      text: 'Goodbye',
    });
  }

  render() {
    const {text} = this.state;
    return (
      <View 
        style={{
            height: 50,
            width: 50,
            backgroundColor: 'green'
        }}
      > 
        <Text>{text}</Text>
      </View>
    );
  }
}

export default Header;
