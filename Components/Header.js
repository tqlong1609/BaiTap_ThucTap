import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import styles from '../Screens/Home/css';

export class Header extends Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.containerButtonMenu}>
          <Image
            source={require('../Images/menu_127px.png')}
            style={styles.imageMenu}
          />
        </TouchableOpacity>
        <KeyboardAvoidingView
          enabled={false}
          style={styles.textInputSearch}
          behavior="height">
          <TextInput placeholder={'Search'} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Header;
