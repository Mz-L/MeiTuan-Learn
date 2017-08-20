/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import NearBar from '../../components/NearBar';
import Food from './TabPage/Food';
import Hotel from './TabPage/Hotel';
import Play from './TabPage/Play';
import All from './TabPage/All';

export default class NearPage extends Component {
  static  defaultProps={
    url:'http://47.93.30.78:8080/MeiTuan/near'
  };

  state={
    foodItem:{},
    hotelItem:{},
    playItem:{},
    allItem:{},
    resJson:null
  };

  render() {
    if(this.state.resJson==null){
      return (
          <View style={styles.viewWaitStyle}>
            <Text>正在加载...</Text>
          </View>
      )
    }

    return (
        <View style={styles.viewStyle}>
          <NearBar></NearBar>
          <ScrollableTabView
            tabBarBackgroundColor="#F5FCFF"
            tabBarUnderlineStyle={{backgroundColor:'#FF4645',height:1}}
            tabBarActiveTextColor="#FF4645"
            tabBarInactiveTextColor="gray"
          >
            <Food tabLabel='享美食' items={this.state.foodItem}>享美食</Food>
            <Hotel tabLabel='住酒店' items={this.state.hotelItem}>住酒店</Hotel>
            <Play tabLabel='爱玩' items={this.state.playItem}>爱玩</Play>
            <All tabLabel='全部' items={this.state.allItem}>全部</All>
          </ScrollableTabView>
        </View>
    );
  }

  componentDidMount() {
    fetch(this.props.url,{
      method:'GET'
    })
    .then( (response)=> response.json() )
    .then( (resJson)=>{
      this.setState({
        foodItem:resJson.foodItem,
        hotelItem:resJson.hotelItem,
        playItem:resJson.playItem,
        allItem:resJson.allItem,
        resJson:resJson
      })
    } )
    .catch( ()=>{
      alert("网络错误");
    } )
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    flex:1
  },
  viewWaitStyle:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
});