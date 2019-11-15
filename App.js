import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Handle from './Screens/Handle';

const rootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {headerShown: false},
    },
    Detail: {screen: Detail, navigationOptions: {headerTitle: 'Detail'}},
    Handle: {screen: Handle, navigationOptions: {headerTitle: 'Handle'}},
  },
  {initialRouteName: 'Home'},
);

const AppContainer = createAppContainer(rootStack);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
