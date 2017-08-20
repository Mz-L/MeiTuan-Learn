/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import TopBar from '../../components/TopBar';
import DivideLine from '../../components/DivideLine';
import HomeTop from './HomeTop';
import HomeCenter from './HomeCenter';
import HomeBottom from './HomeBottom';

export default class HomePage extends Component {

  static defaultProps={
    url:'http://47.93.30.78:8080/MeiTuan/home'
  };

  constructor(props){
    super(props);
    this.state={
      categorys:[],
      thridItems:[],
      fourItems:[],
      goods:[]
    }
  }

  render() {

    return (
        <View style={styles.viewStyle}>
          {/*顶栏*/}
          <TopBar></TopBar>
          <ScrollView>
            {/*首页顶部*/}
            <HomeTop categorys={this.state.categorys}></HomeTop>
            <DivideLine></DivideLine>
            {/*首页中部*/}
            <HomeCenter items={this.state.thridItems}></HomeCenter>
            <HomeCenter items={this.state.fourItems}></HomeCenter>
            <DivideLine></DivideLine>
            {/*首页底部*/}
            <Text style={styles.textStyle}>-猜你喜欢-</Text>
            <HomeBottom goods={this.state.goods}></HomeBottom>
          </ScrollView>
        </View>
    );
  }

  componentDidMount() {
    fetch(this.props.url)
    .then( (response)=>response.json() )
    .then( (resJson)=>{
      this.setState({
        categorys:resJson.categorys,
        thridItems:resJson.thridItems,
        fourItems:resJson.fourItems,
        goods:resJson.goods
      })
    } )
    .catch( ()=>{ alert('网络错误') } )
  }

}

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'#F5FCFF',
    flex:1
  },
  textStyle:{
    fontSize:13,
    marginTop:6,
    marginBottom:6,
    textAlign:'center'
  }
});