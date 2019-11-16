import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './css';
import Header from '../../Components/Header';
import ItemFlatList from '../../Components/ItemFlatList';

import {connect} from 'react-redux';

import {
  EditScreenName,
  DetailScreenName,
  AddScreenName,
} from '../../src/ScreensName';

class Home extends Component {
  componentDidMount() {
    this.props.onLoadData();
  }
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
    const dataSendToAdd = {
      nameTitle: 'Add',
    };
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <Header />
        </View>
        <View style={styles.viewBody}>
          <FlatList
            style={styles.viewFlatlist}
            data={this.props.value}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ItemFlatList
                {...this.props}
                id={item.id}
                name={item.name}
                amount={item.amount}
                describeShort={item.describeShort}
                describeLong={item.describeLong}
                uriImage={item.uriImage}
              />
            )}
          />
          <View style={styles.viewAdd}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('AddScreenName', dataSendToAdd);
              }}>
              <Image
                source={require('../../Images/add_cloud.png')}
                style={styles.imageAdd}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
  };
};

const mapDispachToProps = dispach => {
  return {
    onLoadData: () => dispach({type: 'loadData'}),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Home);
