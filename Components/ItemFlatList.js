import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from '../Screens/Home/css';
import {
  HomeScreenName,
  EditScreenName,
  DetailScreenName,
  AddScreenName,
} from '../src/ScreensName';

export default class ItemFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uriImage: '',
      name: '',
      amount: 0,
      describeShort: '',
      describeLong: '',
    };
  }

  static getDerivedStateFromProps(_props, _state) {
    if (_props.name === _state.name) {
      console.log('null');
      return null;
    }
    console.log('_props.name', _props.name);
    console.log('_state.name', _state.name);
    return {
      name: _props.name,
      amount: _props.amount,
      describeShort: _props.describeShort,
      describeLong: _props.describeLong,
      uriImage: _props.uriImage,
    };
  }

  shouldComponentUpdate(nextProps) {
    const isUpdate = nextProps.name === this.state.name ? false : true;
    return isUpdate;
  }

  render() {
    console.log(this.state.uriImage);
    return (
      <View style={styles.containerFlatlist}>
        <View style={styles.viewItemContainer}>
          <Image
            source={{
              uri: this.state.uriImage,
            }}
            style={styles.imageItemFlatlist}
          />
        </View>
        <View style={styles.viewContainerLeftItem}>
          <View style={styles.viewContainerNameAmount}>
            <Text style={styles.textContainerNameAmount}>
              {this.state.name}
            </Text>
            <Text style={styles.textContainerNameAmount}>
              Amount: {this.state.amount}
            </Text>
          </View>
          <View style={styles.viewContainerBottomItem}>
            <View style={styles.viewBottomName}>
              <View style={styles.viewShort}>
                <View style={styles.headerViewShort} />
                <View style={styles.viewTextSort}>
                  <Text numberOfLines={3} style={styles.textSort}>
                    {this.state.describeShort}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.viewBottomAmount}>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.viewButtonRemove}>
                  <Image
                    source={require('../Images/delete_127px.png')}
                    style={styles.imageRemove}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewButtonEdit}
                  onPress={() => {
                    this.props.navigation.navigate('EditScreenName');
                  }}>
                  <Image
                    source={require('../Images/pencil_tip_127px.png')}
                    style={styles.imageEdit}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttonDetail}
                onPress={() => {
                  this.props.navigation.navigate(
                    'DetailScreenName',
                    this.state,
                  );
                }}>
                <Text style={styles.textDetail}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
