/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MineBar from '../../components/MineBar';

var Icons=[
  {icon:"mine_clothes",hasMsg:true,msgNumber:'1'},
  {icon:"mine_setting",hasMsg:true,msgNumber:'2'},
  {icon:"mine_alarm",hasMsg:true,msgNumber:'5'}
];

export default class MinePage extends Component {
  constructor(props){
    super(props);
    this.state={
      Icons:Icons
    }
  }
  render() {
    return (
        <View>
          <MineBar icons={this.state.Icons}></MineBar>
          <Text>MinePage</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});