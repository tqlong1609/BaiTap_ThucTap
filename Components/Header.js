import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from '../css';

export class Header extends Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            source={require('../Images/menu_127px.png')}
            style={styles.imageMenu}
          />
        </TouchableOpacity>
        <KeyboardAvoidingView
          enabled={false}
          style={styles.textInputSearch}
          behavior="height">
          <TextInput placeholder={'Search'}></TextInput>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Header;
