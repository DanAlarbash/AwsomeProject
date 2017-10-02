import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Container, Content, Button} from 'native-base';


export default class Component1 extends Component {
  render() {
    let pic = {
      uri: 'http://goldwallpapers.com/uploads/posts/ostrich-wallpaper/ostrich_wallpaper_001.jpg'
    };
    return (

      <Image source={pic} style={{width: 350, height: 300}}/>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
