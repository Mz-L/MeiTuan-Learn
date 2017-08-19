/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  InteractionManager
} from 'react-native';

import MineBar from '../../components/MineBar';
import DivideLine from '../../components/DivideLine';
import DivideSmallLine from '../../components/DivideSmallLine';
import MineItemView from './MineItemView';
import LoginPage from '../Login/LoginPage';

import MineBean from '../../data/MineBean.json';

var _this;

export default class MinePage extends Component {
  constructor(props){
    super(props);
    this.state={
      Icons:MineBean.topBar,
      headerItem:MineBean.headerItem,
      items:MineBean.items,
      userId:''
    };
    _this = this;
  }
  render() {
    return (
        <View>
          {/*topBar*/}
          <MineBar icons={this.state.Icons}></MineBar>
          {/*headerItem*/}
          {this.renderHeaderItem()}
          {/*items*/}
          {this.renderItems()}
        </View>
    );
  }
  /*渲染headerItem*/
  renderHeaderItem(){
    var headerItem = this.state.headerItem;
    return(
      <TouchableOpacity
          style={styles.headerItemStyle}
          activeOpacity={0.7}
          onPress={ ()=>this.goToLogin() }
      >
        {/*左侧*/}
        <View>
          <Image style={styles.imageLeftStyle} source={{uri:headerItem.headerImage}}></Image>
        </View>
        {/*右侧*/}
        <View>
          <View style={styles.viewContentStyle}>
            <Text style={styles.text1Style}>{headerItem.userName}</Text>
            <Image style={styles.imageRightStyle} source={{uri:headerItem.leveImage}}></Image>
          </View>
          <View style={styles.viewContentStyle}>
            <Text style={styles.text2Style}>{headerItem.descrption}</Text>
            <Image style={styles.imageRightStyle} source={{uri:'daily_recomm_arrow'}}></Image>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  /*渲染items*/
  renderItems(){
    var ItemsData = this.state.items;
    var items = [];
    for(var i = 0;i<ItemsData.length;i++){
      items.push(
        <View key={i}>
          <DivideLine></DivideLine>
        </View>
      );
      for(var j = 0;j<ItemsData[i].length;j++){
        var Item = ItemsData[i][j];
        if(j==ItemsData[i].length-1){
          items.push(
              <View key={i+''+j}>
                <MineItemView option={Item}></MineItemView>
              </View>
          )
        }
        else{
          items.push(
              <View key={i+''+j}>
                <MineItemView option={Item}></MineItemView>
                <DivideSmallLine></DivideSmallLine>
              </View>
          )
        }
      }
    }
    return items;
  }
  /*login*/
  goToLogin(){
    if(this.state.userId==''){
      InteractionManager.runAfterInteractions( ()=>{
        this.props.navigator.push({
          component:LoginPage,
          title:'LoginPage',
          params:{
            getUser:(user)=>{
              _this.setState({
                Icons:user.topBar,
                headerItem:user.headerItem,
                items:user.items,
                userId:user.id
              })
            }
          }
        })
      } )
    }

  }
}

const styles = StyleSheet.create({
  headerItemStyle:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#06C1AE',
  },
  imageLeftStyle:{
    width:45,
    height:45,
    margin:10
  },
  viewContentStyle:{
    flexDirection:'row',
    alignItems:'center',
    margin:3
  },
  imageRightStyle:{
    width:12,
    height:12,
  },
  text1Style:{
    color:'white'
  },
  text2Style:{
    color:'white',
    fontSize:12
  }
});