import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from '../css';

export default class ItemFlatList extends Component {
  render() {
    return (
      <View style={styles.containerFlatlist}>
        <View style={styles.viewItemContainer}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1SHMvIdqp8ryV87b28PJ_E-dC0BknquiiLpwt20VotiTNBqc&s',
            }}
            style={styles.imageItemFlatlist}
          />
        </View>
        <View style={styles.viewContainerLeftItem}>
          <View style={styles.viewContainerNameAmount}>
            <Text style={styles.textContainerNameAmount}>Name</Text>
            <Text style={styles.textContainerNameAmount}>Amount: 20</Text>
          </View>
          <View style={styles.viewContainerBottomItem}>
            <View style={styles.viewBottomName}>
              <View style={styles.viewShort}>
                <View style={styles.headerViewShort} />
                <View style={styles.viewTextSort}>
                  <Text numberOfLines={3} style={styles.textSort}>
                    asjdkasdkasjdlasjdlkasjdlkasjdlajsdlkasjdlkjaslkdjalskdjlaksdjlaksjdlkasjdlaskjdlasjdlkasj
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
                <TouchableOpacity style={styles.viewButtonEdit}>
                  <Image
                    source={require('../Images/pencil_tip_127px.png')}
                    style={styles.imageEdit}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttonDetail}
                onPress={() => {
                  this.props.navigation.navigate('Detail');
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
