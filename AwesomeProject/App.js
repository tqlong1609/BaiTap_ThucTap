/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import styles from './Style.js';
import React, {Component}  from 'react';
import {
  FlatList,
  TextInput,
  Image,
  DrawerLayoutAndroid, 
  Text, 
  StyleSheet,
  View, 
  TouchableOpacity} from 'react-native';

class App extends Component {
  render() {
     var uri = './image/myImage.jpg';
    return (
      <View style={styles.container}>
        <View style={styles.informationGroup}>
          <Image source={require(uri)} style={styles.image} />
          <View style={styles.information}>
            <Text style={styles.Text}>Họ và tên:</Text>
            <Text style={styles.Text}>MSSV:</Text>
          </View>
        </View>
        <View style={styles.handleGroup}></View>
        <View style={styles.listGroup}></View>
      </View>
    );
  }
}

export default App;
