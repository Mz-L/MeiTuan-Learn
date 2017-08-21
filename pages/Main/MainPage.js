/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomePage from '../Home/HomePage';
import NearPage from '../Near/NearPage';
import ShopPage from '../Shop/ShopPage';
import OrderPage from '../Order/OrderPage';
import MinePage from '../Mine/MinePage';
//测试轮播图
//import Banner from '../../components/Banner';

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state={
      selected:'首页'
    }
  }
  render() {
    return (
        <TabNavigator
          tabBarStyle={styles.tabBarStyle}
        >
          {/*item1*/}
          <TabNavigator.Item
            title="首页"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image source={{uri:'ic_vector_home_normal'}} style={styles.imageStyle}/> }
            renderSelectedIcon={ ()=><Image source={{uri:'ic_vector_home_pressed'}} style={styles.imageStyle}/> }
            selected={ this.state.selected=='首页' }
            onPress={ ()=>this.setState({selected:'首页'}) }
          >
            <HomePage {...this.props}/>
            {/*测试轮播图*/}
            {/*<Banner/>*/}
          </TabNavigator.Item>

          {/*item2*/}
          <TabNavigator.Item
            title="附近"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image source={{uri:'ic_vector_nearby_normal'}} style={styles.imageStyle}/> }
            renderSelectedIcon={ ()=><Image source={{uri:'ic_vector_nearby_pressed'}} style={styles.imageStyle}/> }
            selected={ this.state.selected=='附近' }
            onPress={ ()=>this.setState({selected:'附近'}) }
          >
            <NearPage {...this.props}/>
          </TabNavigator.Item>

          {/*item3*/}
          <TabNavigator.Item
            title="逛一逛"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image source={{uri:'ic_vector_discover_normal'}} style={styles.imageStyle}/> }
            renderSelectedIcon={ ()=><Image source={{uri:'ic_vector_discover_pressed'}} style={styles.imageStyle}/> }
            selected={ this.state.selected=='逛一逛' }
            onPress={ ()=>this.setState({selected:'逛一逛'}) }
          >
            <ShopPage {...this.props}/>
          </TabNavigator.Item>

          {/*item4*/}
          <TabNavigator.Item
            title="订单"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image source={{uri:'ic_vector_order_normal'}} style={styles.imageStyle}/> }
            renderSelectedIcon={ ()=><Image source={{uri:'ic_vector_order_pressed'}} style={styles.imageStyle}/> }
            selected={ this.state.selected=='订单' }
            onPress={ ()=>this.setState({selected:'订单'}) }
          >
            <OrderPage {...this.props}/>
          </TabNavigator.Item>

          {/*item5*/}
          <TabNavigator.Item
            title="我的"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image source={{uri:'ic_vector_mine_normal'}} style={styles.imageStyle}/> }
            renderSelectedIcon={ ()=><Image source={{uri:'ic_vector_mine_pressed'}} style={styles.imageStyle}/> }
            selected={ this.state.selected=='我的' }
            onPress={ ()=>this.setState({selected:'我的'}) }
          >
            <MinePage {...this.props}></MinePage>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle:{
    height:50
  },
  imageStyle:{
    width:25,
    height:25
  }
});