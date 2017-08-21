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
      goods:[],
      resJson:null
    }
  }

  render() {
    if(this.state.resJson==null){
      return (
        <View style={styles.loadingStyle}>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
        <View style={styles.viewStyle}>
          {/*顶栏*/}
          <TopBar/>
          <ScrollView style={styles.viewScrollStyle}>
            {/*首页顶部*/}
            <HomeTop categorys={this.state.categorys}/>
            <DivideLine/>
            {/*首页中部*/}
            <HomeCenter items={this.state.thridItems}/>
            <HomeCenter items={this.state.fourItems}/>
            <DivideLine/>
            {/*首页底部*/}
            <Text style={{marginBottom:10,marginTop:10,textAlign:'center'}}>-猜你喜欢-</Text>
            <HomeBottom goods={this.state.goods}/>
          </ScrollView>
        </View>
    );
  }

  componentDidMount(){
    fetch(this.props.url,{method:'GET',headers:{}})
    .then( (response)=>response.json() )
    .then( (resJson)=>{
      this.setState({
        categorys:resJson.categorys,
        thridItems:resJson.thridItems,
        fourItems:resJson.fourItems,
        goods:resJson.goods,
        resJson:resJson
      })
    } )
    .catch( ()=>{ alert('网络错误') } )
  }

}

const styles = StyleSheet.create({
  loadingStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  viewStyle:{
    flex:1
  },
  viewScrollStyle:{
    backgroundColor:'#F5FCFF'
  }
});