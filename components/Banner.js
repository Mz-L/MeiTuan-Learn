/**
 * Created by Mz on 2017/8/15.
 */
/**
 * 这是整理封装的轮播图组件,(如果项目没有react-timer-mixin定时器先安装)
 * 项目根目录命令行: npm  i  react-timer-mixin  --save
 */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

//ES5
//引入定时器
var TimerMixin = require('react-timer-mixin');
//也可以直接使用已经封装的Scroll工具类
var Dimensions = require('Dimensions');
var windowWidth = Dimensions.get('window').width;
//测试图片
var BannerImage = require('../data/banner.json');


var Banner = React.createClass({

  getInitialState(){
    return {
      currentPage:0,
      bannerTitle:BannerImage[0].title
    }
  },

  render(){
    return (
      <View>
        {/*banner视图*/}
        <ScrollView
          ref="scrollView"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={ (e)=>{ this.onPageEnd(e) } }
        >
          {this.renderItem()}
        </ScrollView>
        {/*指示器*/}
        <View style={styles.viewCirlesStyle}>
          {this.renderCirles()}
        </View>
        {/*标题*/}
        <Text style={styles.textTitleStyle}>{this.state.bannerTitle}</Text>
      </View>
    )
  },

  mixins:[TimerMixin],
  componentDidMount(){
    var scrollView = this.refs.scrollView;
    this.setInterval(function(){
      var currentPage = this.state.currentPage;
      if(currentPage>=(BannerImage.length-1)){
        currentPage = 0;
      }else{
        currentPage+=1;
      }
      var currentX = currentPage*windowWidth;
      scrollView.scrollResponderScrollTo({x:currentX,y:0,animated:true});
      this.setState({
        currentPage:currentPage,
        bannerTitle:BannerImage[currentPage].title
      })
    },3000)
  },

  //渲染每一个Item
  renderItem(){
    var items = [];
    for(var i = 0;i<BannerImage.length;i++){
      var img = BannerImage[i];
      items.push(
          <Image key={i} style={styles.imageBannerStyle} source={{uri:img.icon}}/>
      )
    }
    return items;
  },

  renderCirles(){
    var cirles = [];
    for(var i = 0;i<BannerImage.length;i++){
      //var img = BannerImage[i];
      var bgStyle = this.state.currentPage == i ? 'orange' : 'white';
      cirles.push(
        <Text key={i} style={[{backgroundColor:bgStyle},styles.textCirlesStyle]}/>
      )
    }
    return cirles;
  },

  onPageEnd(e){
    var contentOffset = e.nativeEvent.contentOffset.x;
    var page = Math.round(contentOffset/windowWidth);
    this.setState({
      currentPage:page,
      bannerTitle:BannerImage[page].title
    })
  }

});

const styles = StyleSheet.create({
  imageBannerStyle:{
    width:windowWidth,
    height:windowWidth*322/720
  },
  viewCirlesStyle:{
    width:windowWidth,
    height:20,
    flexDirection:'row',
    position:'absolute',
    left:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.4)'
  },
  textCirlesStyle:{
    width:5,
    height:5,
    borderRadius:3,
    margin:2,
    marginTop:8
  },
  textTitleStyle:{
    position:'absolute',
    right:0,
    bottom:2,
    color:'white',
    fontSize:12
  }
});

module.exports = Banner;