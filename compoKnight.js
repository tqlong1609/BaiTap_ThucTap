import React, {Component} from 'react';
import styles from './styles';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {} from 'react-native/Libraries/NewAppScreen';
class knight extends Component {
  constructor(props) {
    super(props);
    this._clickShield = this._clickShield.bind(this);
    this._clickSword = this._clickSword.bind(this);
  }

  _clickShield() {
    const {onAttackShield} = this.props;
    onAttackShield && onAttackShield();
  }

  _clickSword(){
    const {onAttackSword} = this.props;
    onAttackSword && onAttackSword();
  }

  render() {
    const {value} = this.props;
    var uriButtonSword = './image/swords.png';
    var uriButtonShield = './image/antivirus.png';
    return (
      <View style={styles.itemBottomFootGroup}>
        <View style={styles.buttonLeftFoot}>
          <TouchableOpacity onPress={this._clickShield}>
            <Image
              style={styles.buttonAnimal1}
              source={require(uriButtonShield)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._clickSword}>
            <Image
              style={styles.buttonAnimal1}
              source={require(uriButtonSword)}
            />
          </TouchableOpacity>
        </View>
        <Image source={this.props.uriImage} style={styles.imageKnight} />
        <Text style={styles.textKnight}>{value}</Text>
      </View>
    );
  }
}
export default knight;
