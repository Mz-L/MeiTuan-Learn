/**
 * Created by Mz on 2017/8/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import NearItem from './NearItem';
import Screen from  '../../../utils/Screen';

var col=4;
var viewWidth=70;
var marginTop=10;
var marginLeft=(Screen.w - viewWidth*col)/(col+1);

export  default class All extends  Component{


  constructor(props){
    super(props);
    var ds=new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2});
    this.state= {
      dataSource:ds.cloneWithRows(this.props.items.nearbeans),
      headerSelectedIndex:0,
      items:this.props.items
    }
  }

  render(){
    return(
        <ListView
            dataSource={this.state.dataSource}
            renderRow={ (rowDate)=> this.renderItem(rowDate) }
        >
        </ListView>
    )
  }

  renderItem(rowDate){
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={ ()=> this.clickItem(rowDate)}>
          <NearItem rowDate={rowDate}></NearItem>
        </TouchableOpacity>
    )
  }

  clickItem(rowDate){
    Alert.alert(
        'Item Title',
        rowDate.storeName,
        [
          {text: '取消', onPress: () => alert('已取消')},
          {text: '确定', onPress: () => alert('已确定')}
        ]
    )

  }

}

const  styles=StyleSheet.create({
  viewStyle:{
    flex:1
  }

});