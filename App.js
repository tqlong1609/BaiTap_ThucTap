/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import styles from './Style.js';
import React, {Component} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from './Header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{key: 0, name: 7}],
      total: 0,
      isUpdate: true,
      textValue: 0,
    };
    this._onPressButtonAddItem = this._onPressButtonAddItem.bind(this);
    this._onPressButtonRemoveItem = this._onPressButtonRemoveItem.bind(this);
    this._onPressButtonAdd = this._onPressButtonAdd.bind(this);

    // value max random
    this.maxRandom = 10;

    // value min random
    this.minRandom = 0;
  }

  // update key when add, remove
  updateKey() {
    this.removeItem = this.removeItem.bind(this);
    let {arr} = this.state;
    for (let i = 0; i < arr.length; i++) {
      arr[i].key = i;
    }
    this.setState(() => {
      arr: arr;
    });
  }

  componentDidMount() {}

  // get value total name of array
  handleTotalName() {
    this.render = this.render.bind(this);

    // handle: set value into total
    let temp = 0;
    for (let i = 0; i < this.state.arr.length; i++) {
      temp += this.state.arr[i].name;
    }
    this.setState(() => ({total: temp, isUpdate: false}));
  }

  // event click button add item
  _onPressButtonAddItem() {
    let arrTemp = this.state.arr;

    // get key
    // let key = this.getKeyFromArray(arrTemp);
    let key = arrTemp.length;

    // get value name following random
    let name = this.getNameByRandom(this.minRandom, this.maxRandom);

    arrTemp.push({key: key, name: Number(name)});
    this.setState(() => ({arr: arrTemp, isUpdate: true}));

    alert('add success');
  }

  // alert confirm remove
  confirmRemove(index) {
    this._onPressButtonRemoveItem = this._onPressButtonRemoveItem.bind(this);

    Alert.alert(
      'ARE YOU SURE ?',
      'You can not restore !!!',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.removeItem(index)},
      ],
      {cancelable: false},
    );
  }

  // remove item when confirm
  removeItem(index) {
    this.confirmRemove = this.confirmRemove.bind(this);
    let {arr} = this.state;
    arr.splice(index, 1);
    this.setState(() => ({arr: arr, isUpdate: true}));

    // update key
    this.updateKey();

    alert('remove success');
  }

  // event click button remove item
  // @index: position of array item flat list
  _onPressButtonRemoveItem(index) {
    if (this.state.arr.length > 1) {
      this.confirmRemove(index);
    } else {
      alert('Xoá gì xoá lắm!!!');
    }
  }

  // random: 0 -> maxRandom
  getNameByRandom(minRandom, maxRandom) {
    this._onPressButtonAddItem = this._onPressButtonAddItem.bind(this);

    let x = minRandom + Math.random() * (maxRandom - minRandom);
    return x.toFixed();
  }

  // click add value
  _onPressButtonAdd(index) {
    let arr = this.state.arr;

    arr[index].name = Number(this.state.textValue) + arr[index].name;

    this.setState(() => ({arr: arr, isUpdate: true, textValue: 0}));
    this.myTextInput.clear();
  }

  render() {
    var uri = './image/myImage.jpg';

    if (this.state.isUpdate) {
      this.handleTotalName();
    }

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        enabled={false}>
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
            ref={ref => {
              this.myTextInput = ref;
            }}
            onChangeText={textValue => {
              this.setState({
                textValue,
              });
            }}
            style={styles.textInput}
            placeholder={'X'}
            keyboardType={'numeric'}
          />
          <View style={styles.groupTotal}>
            <Text style={styles.textHandle}>Total: </Text>
            <Text style={styles.textHandle}>{this.state.total}</Text>
          </View>
        </View>
        <View style={styles.listGroup}>
          <FlatList
            data={this.state.arr}
            renderItem={({item, index}) => (
              <View style={styles.itemFlatList}>
                <Text style={styles.itemTextFlatList}>{item.name}</Text>
                <TouchableOpacity onPress={this._onPressButtonAddItem}>
                  <Image
                    style={styles.button}
                    source={require('./image/add_file_127px.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this._onPressButtonRemoveItem(index);
                  }}>
                  <Image
                    style={styles.button}
                    source={require('./image/delete_file_127px.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this._onPressButtonAdd(index);
                  }}>
                  <Image
                    style={styles.button}
                    source={require('./image/add_127px.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default App;
