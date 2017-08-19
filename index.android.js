/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';

import MainPage from './pages/Main/MainPage';

export default class MeiTuan extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name:'MainPage',component:MainPage}}
        configureScene={ ()=>Navigator.SceneConfigs.PushFromRight }
        renderScene={ (route,navigator)=>{
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        } }
      />
    );
  }
}

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
