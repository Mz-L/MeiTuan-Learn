/**
 * Created by Mz on 2017/8/19.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    BackAndroid
} from 'react-native';

import Screen from '../../utils/Screen';
import BackBar from '../../components/BackBar';

export  default  class  DivideLine extends  Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      password:''
    }
  }

  render(){
    return(
      <View style={styles.viewStyle}>
        {/*bar*/}
        <BackBar navigator={this.props.navigator}></BackBar>
        {/*内容*/}
        <View style={styles.container}>
          {/*logo*/}
          <Image style={styles.ImageStyle} source={{uri:'header_icon'}}></Image>
          {/*输入用户名和密码*/}
          <View style={{marginTop:20}}>
            <TextInput
              style={styles.text1Input}
              underlineColorAndroid={'transparent'}
              placeholder='输入用户名'
              onChangeText={ (text)=>this.setState({userName:text}) }
            >
            </TextInput>
            <TextInput
              style={styles.text1Input}
              underlineColorAndroid={'transparent'}
              placeholder='输入密码'
              secureTextEntry={true}
              onChangeText={ (text)=>this.setState({password:text}) }
            >
            </TextInput>
          </View>

          {/*登录按钮*/}
          <TouchableOpacity activeOpacity={0.7} onPress={ ()=>this.loginIn() }>
            <Text style={styles.loginStyle}>登录</Text>
          </TouchableOpacity>

          {/*设计*/}
          <View style={styles.viewSettingStyle}>
            <Text style={styles.textOutLogin} >无法登录</Text>
            <Text style={[styles.textOutLogin,{textAlign:'right'}]} >新用户</Text>
          </View>

          {/*其它登录方式*/}
          <View style={styles.viewOtherStyle}>
            <Text>其他登录方式</Text>
            <Image style={styles.loginImage} source={{uri:'share_ic_base_share_qq'}}></Image>
            <Image style={styles.loginImage} source={{uri:'share_ic_base_share_sina_weibo'}}></Image>
            <Image style={styles.loginImage} source={{uri:'share_ic_base_share_weixin'}}></Image>
          </View>
        </View>
      </View>
    )
  }

  loginIn(){
    var userName = this.state.userName;
    var password = this.state.password;
    if(userName!=''&&password!=''){
      fetch('http://47.93.30.78:8080/MeiTuan/login',{
        method:'POST',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'username='+userName+'&password='+password
      })
      .then( (response)=>response.json() )
      .then( (resJson)=>{
        if(resJson.state==200){
          if(this.props.getUser){
            this.props.getUser(resJson);
          }
          this.props.navigator.pop();
        }
        else{
          alert(resJson.result)
        }
      } )
      .catch( ()=>{ alert('网络错误') } )
    }
    else{
      alert('请输入用户名或密码')
    }
  }

}

const  styles=StyleSheet.create({
  viewStyle:{
    flex:1,
    backgroundColor:'#ddd'
  },
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center'
  },
  ImageStyle: {
    width: 90,
    height: 90,
    marginTop:40,
    borderRadius:50
  },
  text1Input: {
    width: Screen.w - 20,
    height: 30,
    padding: 0,
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius:6
  },
  loginStyle: {
    width: Screen.w  - 20,
    height: 30,
    backgroundColor: '#49A0F8',
    marginTop:20,
    borderRadius:5,
    color:'white',
    fontSize:14,
    textAlign:'center',
    paddingTop:6
  },
  viewSettingStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
    width:Screen.w -20
  },
  textOutLogin:{
    color:'#49A0F8',
    flex:1
  },
  viewOtherStyle:{
    width:Screen.w -20,
    height:40,
    flexDirection:'row',
    alignItems:'center',
    position:'relative',
    top:100
  },
  loginImage: {
    width: 35,
    height: 35,
    marginLeft: 8
  }

});