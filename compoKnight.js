import React, {Component} from 'react';
import styles from './styles';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';

class knight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const typeKnight = this.props.typeKnight;
    const valueKnight =
      typeKnight === 'knight1'
        ? this.props.valueKnight1
        : this.props.valueKnight2;
    const _clickShield =
      typeKnight === 'knight1'
        ? this.props._clickShield1
        : this.props._clickShield2;
    const _clickSword =
      typeKnight === 'knight1'
        ? this.props._clickSword1
        : this.props._clickSword2;
    
    var uriButtonSword = './image/swords.png';
    var uriButtonShield = './image/antivirus.png';
    return (
      <View style={styles.itemBottomFootGroup}>
        <View style={styles.buttonLeftFoot}>
          <TouchableOpacity onPress={_clickShield}>
            <Image
              style={styles.buttonAnimal1}
              source={require(uriButtonShield)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={_clickSword}>
            <Image
              style={styles.buttonAnimal1}
              source={require(uriButtonSword)}
            />
          </TouchableOpacity>
        </View>
        <Image source={this.props.uriImage} style={styles.imageKnight} />
        <Text style={styles.textKnight}>{valueKnight}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    valueKnight1: state.valueKnight1,
    valueKnight2: state.valueKnight2,
  };
};

const mapDispachToProps = dispach => {
  return {
    _clickShield1: () => dispach({type: 'addValueKnight1'}),
    _clickSword1: () => dispach({type: 'addValueKnight2'}),
    _clickShield2: () => dispach({type: 'addValueKnight2'}),
    _clickSword2: () => dispach({type: 'addValueKnight1'}),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(knight);
