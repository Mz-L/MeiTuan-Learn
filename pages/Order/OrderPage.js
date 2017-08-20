/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import OrderBar from '../../components/OrderBar';
import OrderItemBar from './OrderItemBar';
import OrderItemView from './OrderItemView';
import NearItem from '../Near/TabPage/NearItem';

import OrderBean from '../../data/OrderPageBean.json';
var _this;
var items=[
  {titleLeft:'我的订单', titleRight:'全部订单'},
  {titleLeft:'最近浏览', titleRight:'查看全部'}
];

export default class OrderPage extends Component {

  static defaultProps={
    url:'http://47.93.30.78:8080/MeiTuan/order'
  };

  constructor(props){
    super(props);
    this.state={
      orderPage:OrderBean,
      isRefreshing: false
    };
    _this=this;

  }

  onRefresh(){
    _this.setState({isRefreshing: true});

    fetch('http://47.93.30.78:8080/MeiTuan/order')
    .then( (response)=>response.json() )
    .then( (resJson)=>{
      _this.setState({
        isRefreshing: false,
        orderPage:resJson
      });
    })
    .catch( ()=>alert('网络错误') )
  }

  render() {
    return (
        <View style={styles.viewStyle}>
          <OrderBar></OrderBar>

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
                title="Loading..."
                titleColor="#00ff00"
                tintColor="#ff0000"
                colors={['red']}
                progressBackgroundColor="white"
              />
            }
          >
            {/*我的订单*/}
            <OrderItemView option={items[0]}></OrderItemView>
            {/* 代付款,待使用,待评价,退款/稍后 */}
            <OrderItemBar orderbars={this.state.orderPage.orderbars}></OrderItemBar>
            {/*最近订单*/}
            <Text style={{fontSize:12,backgroundColor:'#dddddd',height:22,paddingTop:3,paddingLeft:10}}>最近订单</Text>
            {/*最近订单中的列表*/}
            {this.renderOrderItems(this.state.orderPage.nearOrder)}

            {/*最近浏览*/}
            <OrderItemView option={items[1]}></OrderItemView>
            {/*最近订单中的列表*/}
            {this.renderOrderItems(this.state.orderPage.nearBeans)}

          </ScrollView>
        </View>
    );
  }

  renderOrderItems(data){
    var Items=[];
    for(var i=0;i<data.length;i++){
      var order=data[i];
      Items.push(
          <NearItem key={i} rowDate={order}></NearItem>
      )
    }

    return Items;
  }

}

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'#F5FCFF',
    flex:1
  }
});