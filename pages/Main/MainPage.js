/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomePage from '../Home/HomePage';
import NearPage from '../Near/NearPage';
import ShopPage from '../Shop/ShopPage';
import OrderPage from '../Order/OrderPage';
import MinePage from '../Mine/MinePage';

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
            renderIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_home_normal'}}></Image> }
            renderSelectedIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_home_pressed'}}></Image> }
            selected={ this.state.selected=='首页' }
            onPress={ ()=>this.setState({selected:'首页'}) }
          >
            <HomePage></HomePage>
          </TabNavigator.Item>

          {/*item2*/}
          <TabNavigator.Item
            title="附近"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_nearby_normal'}}></Image> }
            renderSelectedIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_nearby_pressed'}}></Image> }
            selected={ this.state.selected=='附近' }
            onPress={ ()=>this.setState({selected:'附近'}) }
          >
            <NearPage></NearPage>
          </TabNavigator.Item>

          {/*item3*/}
          <TabNavigator.Item
            title="逛一逛"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_discover_normal'}}></Image> }
            renderSelectedIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_discover_pressed'}}></Image> }
            selected={ this.state.selected=='逛一逛' }
            onPress={ ()=>this.setState({selected:'逛一逛'}) }
          >
            <ShopPage></ShopPage>
          </TabNavigator.Item>

          {/*item4*/}
          <TabNavigator.Item
            title="订单"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_order_normal'}}></Image> }
            renderSelectedIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_order_pressed'}}></Image> }
            selected={ this.state.selected=='订单' }
            onPress={ ()=>this.setState({selected:'订单'}) }
          >
            <OrderPage></OrderPage>
          </TabNavigator.Item>

          {/*item5*/}
          <TabNavigator.Item
            title="我的"
            selectedTitleStyle={{color:'gray'}}
            renderIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_mine_normal'}}></Image> }
            renderSelectedIcon={ ()=><Image style={styles.imageStyle} source={{uri:'ic_vector_mine_pressed'}}></Image> }
            selected={ this.state.selected=='我的' }
            onPress={ ()=>this.setState({selected:'我的'}) }
          >
            <MinePage></MinePage>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle:{
    height:50,
  },
  imageStyle:{
    width:Platform.OS=='ios'?30:25,
    height:Platform.OS=='ios'?30:25
  }
});