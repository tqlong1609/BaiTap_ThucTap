import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from '../css';
import Header from '../Components/Header';
import ItemFlatList from '../Components/ItemFlatList';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {key: '1', name: 'orange', color: 'yellow'},
        {key: '2', name: 'banana', color: 'blue'},
        {key: '3', name: 'orange', color: 'yellow'},
        {key: '4', name: 'banana', color: 'blue'},
        {key: '5', name: 'orange', color: 'yellow'},
        {key: '6', name: 'banana', color: 'blue'},
        {key: '7', name: 'orange', color: 'yellow'},
        {key: '8', name: 'banana', color: 'blue'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Header />
        </View>
        <View style={styles.viewBody}>
          <FlatList
            style={styles.viewFlatlist}
            data={this.state.arr}
            renderItem={({item}) => <ItemFlatList {...this.props} />}
          />
          <View style={styles.viewAdd}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Handle');
              }}>
              <Image
                source={require('../Images/add_cloud.png')}
                style={styles.imageAdd}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
