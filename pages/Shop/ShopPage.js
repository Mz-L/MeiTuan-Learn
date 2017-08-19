/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import ShopBar from '../../components/ShopBar';

export default class ShopPage extends Component {
  state={
    url:'http://i.meituan.com/topic/scene/1?cevent=imt%2Fhomepage%2Fhomeguide4'
  };

  render() {
    return (
        <View style={styles.viewStyle}>
          <ShopBar></ShopBar>
          <WebView
            ref={'webView'}
            automaticallyAdjustContentInsets={false}
            source={{uri: this.state.url}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={true}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'#F5FCFF',
    flex:1
  }
});