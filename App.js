/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Knight from './compoKnight';
import styles from './styles';
import {Image, Text, View, Alert, TouchableOpacity} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      valueKnight1: 0,
      valueKnight2: 0,
    };
    this._onPressButtonDragon = this._onPressButtonDragon.bind(this);
    this._attackAKnight1 = this._attackAKnight1.bind(this);
    this._attackAKnight2 = this._attackAKnight2.bind(this);
    this._opPressRefresh = this._opPressRefresh.bind(this);
  }

  _onPressButtonDragon() {
    let {value, valueKnight1, valueKnight2} = this.state;
    this.setState({
      value: value + 1,
      valueKnight1: valueKnight1 + 1,
      valueKnight2: valueKnight2 + 1,
    });
  }

  _attackAKnight1() {
    this.setState(prevState => ({
      valueKnight1: prevState.valueKnight1 + 1,
    }));
  }
  _attackAKnight2() {
    this.setState(prevState => ({
      valueKnight2: prevState.valueKnight2 + 1,
    }));
  }

  _opPressRefresh() {
    this.setState({value: 0, valueKnight1: 0, valueKnight2: 0});
  }

  render() {
    var uri = './image/myImage.jpg';
    var uriButtonRefresh = './image/refresh_127px.png';
    var uriButtonLion = './image/dragon.png';

    var uriImageKnight1 = './image/knight1.png';
    var uriImageKnight2 = './image/knight2.png';

    return (
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

        {/* view refresh */}
        <View style={styles.bodyGroup}>
          <TouchableOpacity onPress={this._opPressRefresh}>
            <Image
              style={styles.buttonRefresh}
              source={require(uriButtonRefresh)}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headerFootGroup}>
          <TouchableOpacity onPress={this._onPressButtonDragon}>
            <Image style={styles.buttonLion} source={require(uriButtonLion)} />
          </TouchableOpacity>
          <Text style={styles.textOutSide}>{this.state.value}</Text>
        </View>
        <View style={styles.bottomFootGroup}>
          <Knight
            uriImage={require(uriImageKnight1)}
            value={this.state.valueKnight1}
            onAttackShield={this._attackAKnight1}
            onAttackSword={this._attackAKnight2}
          />
          <Knight
            uriImage={require(uriImageKnight2)}
            value={this.state.valueKnight2}
            onAttackShield={this._attackAKnight2}
            onAttackSword={this._attackAKnight1}
          />
        </View>
      </View>
    );
  }
}

export default App;
