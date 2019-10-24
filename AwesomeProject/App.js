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

  const App: () => React$Node = () => {
     var uri = './image/myImage.jpg';
    return (
      <>
        <View style={styles.container}>
          <View style={styles.informationGroup}>
            <Image source={require(uri)} style={styles.image} />
            <View style={styles.information}>
              <View style={styles.nameGroup}>
                <Text style={styles.Text}>Họ và tên: </Text>
                <Text style={styles.Text}>Trần Quang Long</Text>
              </View>
              <View style={styles.nameGroup}>
                <Text style={styles.Text}>MSSV: </Text>
                <Text style={styles.Text}>17110328</Text>
              </View>
            </View>
          </View>
          <View style={styles.handleGroup}>
            <TextInput
              style={styles.textInput}
              placeholder={'X'}
              keyboardType={'numeric'}></TextInput>
            <View style={styles.groupTotal}>
              <Text style={styles.textHandle}>Total: </Text>
              <Text style={styles.textHandle}>0</Text>
            </View>
          </View>
          <View style={styles.listGroup}></View>
        </View>
      </>
    );  
  };

export default App;
