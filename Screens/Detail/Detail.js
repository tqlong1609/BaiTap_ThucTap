import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './css';

export default class Detail extends Component {
  render() {
    const data = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: data.uriImage,
          }}
          style={styles.containerImage}
        />
        <View style={styles.containerName}>
          <Text style={styles.textName}>Name:</Text>
          <Text style={styles.textName}>{data.name}</Text>
        </View>
        <View style={styles.containerName}>
          <Text style={styles.textName}>Amount:</Text>
          <Text style={styles.textName}>{data.amount}</Text>
        </View>
        <View style={styles.containerDescribeShort}>
          <Text style={styles.textDescribeShort}>{data.describeShort}</Text>
        </View>
        <View style={styles.containerDescribeLong}>
          <Text>{data.textDescribeLong}</Text>
        </View>
      </View>
    );
  }
}
