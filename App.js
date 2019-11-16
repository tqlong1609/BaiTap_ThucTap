import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Screens/Home/Home';
import Detail from './Screens/Detail/Detail';
import Handle from './Screens/Handle/Handle';

import {
  HomeScreenName,
  EditScreenName,
  DetailScreenName,
  AddScreenName,
} from './src/ScreensName';

const rootStack = createStackNavigator(
  {
    HomeScreenName: {
      screen: Home,
      navigationOptions: {headerShown: false},
    },
    DetailScreenName: {
      screen: Detail,
      navigationOptions: {headerTitle: 'Detail'},
    },
    AddScreenName: {screen: Handle, navigationOptions: {headerTitle: 'Add'}},
    EditScreenName: {screen: Handle, navigationOptions: {headerTitle: 'Edit'}},
  },
  {initialRouteName: 'HomeScreenName'},
);

const AppContainer = createAppContainer(rootStack);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
